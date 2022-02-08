import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { GET_TEAM, AVAILABLE_YEARS } from "../constants";
import { recordsBlock } from "../types/records";
import { recruit } from "../types/recruits";
import { teamBlock } from "../types/teams";

import RecruitsTable from "./data/RecruitsTable";

type RParam = { teamName: string };
interface teamProp extends teamBlock {
  records: [recordsBlock];
  recruits: [recruit];
}

const YearSelector = ({ selectedYear, updateYear, years }: any) => {
  return (
    <select
      className="flex-1"
      value={selectedYear}
      onChange={(e) => updateYear(e.target.value)}
    >
      {years.map((year: any) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
};

export const Team = (props: any) => {
  let params = useParams();
  let location = useLocation();
  const dispatch = useDispatch();
  const state: any = useSelector((state) => state);
  const team: teamProp = state.team.teamInfo;

  const [selectedYear, updateYear] = useState(2021);

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
  return (
    <div className="mt-2">
      <div className="flex">
        {team && <div className="flex-1 text-4xl mx-4">{team.school}</div>}
        <YearSelector
          selectedYear={selectedYear}
          updateYear={updateYear}
          years={AVAILABLE_YEARS}
        />
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
      <div>
        {team?.recruits && team?.recruits.length > 0 ? (
          <RecruitsTable recruits={team.recruits} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
