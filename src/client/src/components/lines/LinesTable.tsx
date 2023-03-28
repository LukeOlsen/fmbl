// a react component that renders a table that accepts an array of objects with the format {school: string, line: number, year: number}
// the table will order the table by lines from greatest to least
// the table is sortable by clicking on the column headers
// the higher a score is the more green the cell will be
// the lower a score is the more red the cell will be

// Path: src/client/src/components/lines/index.ts
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GET_LINES, LOADING, DONE_LOADING } from "../../constants";
// import { Line } from "../../types";

export const LinesTable = () => {
  const state = useSelector((state: any) => state);
  const { lines } = state.lines;
  console.log(state);
  console.log(lines);
  const [data, setData] = useState(lines);
  const [sort, setSort] = useState({ column: "line", direction: "desc" });
  const [search, setSearch] = useState("");
  const [searchedData, setSearchedData] = useState(data);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { school } = useParams();
  // const location = useLocation();

  useEffect(() => {
    if (!lines || lines.length === 0) {
      dispatch({ type: GET_LINES });
    }
  }, [dispatch, lines]);

  useEffect(() => {
    if (school) {
      const schoolData = lines.filter((line: any) => line.school === school);
      setData(schoolData);
      setSearchedData(schoolData);
    } else {
      setData(lines);
      setSearchedData(lines);
    }
  }, [lines, school]);

  const handleSearch = (e: any) => {
    const value = e.target.value;
    setSearch(value);
    const filteredData = data.filter((line: any) => {
      return (
        line.school.toLowerCase().includes(value.toLowerCase()) ||
        line.year.toString().includes(value.toLowerCase())
      );
    });
    setSearchedData(filteredData);
  };

  const handleSort = (column: string) => {
    let direction = "asc";
    if (sort.column === column && sort.direction === "asc") {
      direction = "desc";
    }
    setSort({ column, direction });
  };

  const handleRowClick = (line: any) => {
    navigate(`/lines/${line.school}/${line.year}`);
  };

  console.log(searchedData);

  return (
    <div className="overflow-y-auto h-screen">
      <h1>Lines</h1>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleSearch}
      />
      <div className="flex align-middle justify-center">
        <table className="table-auto border-solid border-collapse border-indigo-400 border">
          <thead className="border">
            <tr className="border">
              <th className="border" onClick={() => handleSort("team")}>
                School
              </th>
              <th className="border" onClick={() => handleSort("line")}>
                Line
              </th>
              <th className="border" onClick={() => handleSort("conference")}>
                Conference
              </th>
            </tr>
          </thead>
          <tbody>
            {searchedData &&
              searchedData
                .sort((a: any, b: any) => {
                  if (a[sort.column] < b[sort.column]) {
                    return sort.direction === "asc" ? -1 : 1;
                  }
                  console.log(a, b);
                  if (a[sort.column] > b[sort.column]) {
                    return sort.direction === "asc" ? 1 : -1;
                  }
                  return 0;
                })
                // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(
                  (line: any) =>
                    line && (
                      <tr key={line.id} onClick={() => handleRowClick(line)}>
                        <td className="text-left border p-1">{line.team}</td>
                        <td className="text-right border p-1">{line.line}</td>
                        <td className="border p-1">{line.conference}</td>
                      </tr>
                    )
                )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
