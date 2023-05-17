import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GET_TEAM, AVAILABLE_YEARS } from "../constants";
import { recordsBlock } from "../types/records";
import { recruit } from "../types/recruits";
import { teamBlock } from "../types/teams";
import { YearSelector } from "./utils";
import GamesTable from "./data/GamesTable";

import RecruitsTable from "./data/RecruitsTable";
import StatsTable from "./data/TeamStats";
import RecruitsMap from "./data/RecruitsMap";

type RParam = { teamName: string };
interface teamProp extends teamBlock {
  records: [recordsBlock];
  recruits: [recruit];
  games: [any];
  team_stats: Array<{ stat_name: string; stat_value: number }>;
}

export const Team = (props: any) => {
  let params = useParams();
  let location = useLocation();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const state: any = useSelector((state) => state);
  const team: teamProp = state.team.teamInfo;
  const urlYear = location.search.split("=")[1];
  const [selectedYear, updateYear] = useState(urlYear ? urlYear : 2021);

  useEffect(() => {
    if (!state.cache) {
      dispatch({ type: "LOAD_CACHE" });
    }
  }, [state.cache]);

  useEffect(() => {
    const cacheTeam: teamBlock = state.cache.teams.find(
      (team: teamBlock) => team.school === params.teamName
    );
    if (cacheTeam) {
      dispatch({ type: GET_TEAM, team: cacheTeam.id, year: selectedYear });
    }
  }, [params.teamName, selectedYear, state.cache]);

  useEffect(() => {
    if (selectedYear) {
      navigate(`/team/${params.teamName}?year=${selectedYear}`);
    }
  }, [selectedYear]);

  return (
    <div className="mt-2 overflow-y-auto h-screen">
      <div className="flex mb-10">
        {team && <div className="flex-1 text-4xl mx-4">{team.school}</div>}
        <div>
          <YearSelector
            selectedYear={selectedYear}
            updateYear={updateYear}
            years={AVAILABLE_YEARS}
          />
        </div>
        <div>
          {team && (
            <div className="flex-1 flex pr-10">
              <div className="text-4xl mx-2">{team.conference}</div>
              {team.division && (
                <div className="text-4xl mx-2"> {team.division}</div>
              )}
              <div className="text-4xl flex">
                <div className="mx-2">
                  {team?.records && team?.records.length > 0
                    ? team.records[0].total_wins
                    : ""}
                </div>
                <span className="mx-1">-</span>
                <div className="mx-2">
                  {team?.records && team?.records.length > 0
                    ? team.records[0].total_losses
                    : ""}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex mt-2">
        {team?.games && team?.games.length > 0 ? (
          <div className="my-4">
            <GamesTable games={team.games} />
          </div>
        ) : (
          ""
        )}
        {team?.team_stats && team?.team_stats.length > 0 ? (
          <div className="flex m-4">
            <div className="">
              <StatsTable stats={team.team_stats} />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div></div>
      <div className="flex justify-center">
        {team?.recruits && team?.recruits.length > 0 ? (
          <div className="w-3/4 m-4">
            <RecruitsTable recruits={team.recruits} />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="flex justify-center">
        {team?.recruits && team?.recruits.length > 0 ? (
          <div className="w-3/4 m-4">
            <RecruitsMap team={team} recruits={team.recruits} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
