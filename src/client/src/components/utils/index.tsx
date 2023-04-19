export const YearSelector = ({ selectedYear, updateYear, years }: any) => {
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
