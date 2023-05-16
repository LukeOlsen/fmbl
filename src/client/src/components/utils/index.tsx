export const YearSelector = ({ selectedYear, updateYear, years }: any) => {
  return (
    <select
      aria-label="year selector"
      className="py-3 px-4 pr-9 block w-full border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
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
