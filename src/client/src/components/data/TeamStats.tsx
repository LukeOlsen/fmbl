// A react table that will accept an array of objects with the following properties: {stat_name: string, stat_value: number}
// a table will be created that will display the following columns: Stat Name, Stat Value
// the table should have a solid border around it and the header should be bold and centered.
// the table should be 100% width of the parent container.
// the table should be 100% height of the parent container.
// the table should be scrollable vertically.
// the table should be scrollable horizontally.
// the table should have a fixed header.
// the table should have a fixed first column.
// the table should have a fixed last column.
// the table should have a fixed footer.

const StatsTable = (props: {
  stats: Array<{
    stat_name: string;
    stat_value: number;
  }>;
}) => {
  const { stats } = props;

  return (
    <table className="table-fixed flex-1 w-full text-center border border-indigo-600 mx-4">
      <thead className="text-xl border border-indigo-600">
        <tr className="border border-indigo-600">
          <th className="border border-indigo-600">Stat Name</th>
          <th className="border border-indigo-600">Stat Value</th>
        </tr>
      </thead>
      {stats.length > 1 &&
        stats.map((stat) => {
          return (
            <tbody className="border border-indigo-600" key={stat.stat_name}>
              <tr className="border border-indigo-600">
                <td className="border border-indigo-600">{stat.stat_name}</td>
                <td className="border border-indigo-600">{stat.stat_value}</td>
              </tr>
            </tbody>
          );
        })}
    </table>
  );
};

export default StatsTable;
