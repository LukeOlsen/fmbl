// Create a react component that will accept an array of objects with the following properties:
// {home_team_id: number,
// home_points: number,
// away_points: number,
// away_team_id: number,
// away_team: string,
// home_team: string,
// season: number,
// week: number}
// create a table that will display the following columns:
// Week, Home Team, Home Points, Away Points, Away Team
// The table should have a solid border around it and the header should be bold and centered.
// The table should be 100% width of the parent container.
// The table should be 100% height of the parent container.
// The table should be scrollable vertically.
// The table should be scrollable horizontally.
// The table should have a fixed header.
// The table should have a fixed first column.
// The table should have a fixed last column.
// The table should have a fixed footer.

const GamesTable = (props: {
  games: Array<{
    id: number;
    home_team_id: number;
    home_points: number;
    away_points: number;
    away_team_id: number;
    away_team: string;
    home_team: string;
    season: number;
    week: number;
  }>;
}) => {
  const { games } = props;

  return (
    <table className="table-fixed flex-1 w-full text-center border border-indigo-600 mx-4">
      <thead className="text-xl border border-indigo-600">
        <tr className="border border-indigo-600">
          <th className="border border-indigo-600">Week</th>
          <th className="border border-indigo-600">Home Team</th>
          <th className="border border-indigo-600">Home Points</th>
          <th className="border border-indigo-600">Away Points</th>
          <th className="border border-indigo-600">Away Team</th>
        </tr>
      </thead>
      {games.length > 1 &&
        games.map((game) => {
          console.log(game);
          return (
            <tbody className="border border-indigo-600" key={game.id}>
              <tr className="border border-indigo-600">
                <td className="border border-indigo-600">{game.week}</td>
                <td className="border border-indigo-600">{game.home_team}</td>
                <td className="border border-indigo-600">{game.home_points}</td>
                <td className="border border-indigo-600">{game.away_points}</td>
                <td className="border border-indigo-600">{game.away_team}</td>
              </tr>
            </tbody>
          );
        })}
    </table>
  );
};

export default GamesTable;
