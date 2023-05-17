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
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                  >
                    Week
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                  >
                    Home Team
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                  >
                    Home Points
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                  >
                    Away Points
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                  >
                    Away Team
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {games.length > 1 &&
                  games.map((game) => {
                    return (
                      <tr key={game.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                          {game.week}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                          {game.home_team}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                          {game.home_points}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                          {game.away_points}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                          {game.away_team}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesTable;
