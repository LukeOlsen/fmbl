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
    <div className="flex flex-col shadow-lg">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 rounded-lg">
              <thead className="text-xl divide-y divide-slate-800 ">
                <tr className="">
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                  >
                    Stat Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                  >
                    Stat Value
                  </th>
                </tr>
              </thead>
              <tbody className="text-xl">
                {stats.length > 1 &&
                  stats.map((stat) => {
                    return (
                      <tr
                        className="odd:bg-white even:bg-gray-100 dark:odd:bg-slate-900 dark:even:bg-slate-800"
                        key={stat.stat_name}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          {stat.stat_name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {stat.stat_value}
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

export default StatsTable;
