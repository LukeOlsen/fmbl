import { RouteComponentProps } from "react-router-dom";

type RParam = { teamName: string };

export const Team = ({ match }: RouteComponentProps<RParam>) => {
  return <div>{match.params.teamName}</div>;
};
