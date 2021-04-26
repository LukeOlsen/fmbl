import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { GET_TEAM } from "../constants/constants";
import { recordsBlock } from "../types/records";
import { recruit } from "../types/recruits";
import { teamBlock } from "../types/teams";

type RParam = { teamName: string };
interface teamProp extends teamBlock {
  records: [recordsBlock];
  recruits: [recruit];
}

export const Team = ({ match }: RouteComponentProps<RParam>) => {
  const dispatch = useDispatch();
  const result: any = useSelector((state) => state);
  const team: teamProp = result.team.teamInfo;

  useEffect(() => {
    dispatch({ type: GET_TEAM, team: match.params.teamName });
  }, [match.params.teamName]);

  return (
    <div className="mt-2 flex">
      <div className="flex-1 text-4xl mx-4">{match.params.teamName}</div>
      <div>
        {team && (
          <div>
            <div className="flex-1 flex pr-10">
              <div className="text-4xl mx-2">{team.conference}</div>
              {team.division && (
                <div className="text-4xl mx-2"> {team.division}</div>
              )}
              <div className="text-4xl flex">
                <div className="mx-2">{team.records[0].total_wins}</div>
                <span className="mx-1">-</span>
                <div className="mx-2">{team.records[0].total_losses}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
