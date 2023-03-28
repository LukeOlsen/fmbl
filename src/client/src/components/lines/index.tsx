// a react component that renders a landing page to show the lines from a given year
// it will have a header that says betting lines ranking
// on page load it will fetch the lines for the current year based on the
// year in the url. When the lines are fetched it will render a table in the body
// using the LinesTable component

// Path: src/client/src/components/lines/index.tsx
// Compare this snippet from src/client/src/components/lines/LinesTable.tsx:

import { useState } from "react";
import { useLocation } from "react-router-dom";
import { LinesTable } from "./LinesTable";
import { YearSelector } from "../utils";
import { AVAILABLE_YEARS } from "../../constants";

export const Lines = () => {
  let location = useLocation();
  const urlYear = location.search.split("=")[1];
  const [selectedYear, updateYear] = useState(urlYear ? urlYear : 2021);
  return (
    <div>
      <YearSelector
        selectedYear={selectedYear}
        updateYear={updateYear}
        years={AVAILABLE_YEARS}
      />
      <h1>Betting Lines Ranking</h1>
      <div>
        <LinesTable />
      </div>
    </div>
  );
};
