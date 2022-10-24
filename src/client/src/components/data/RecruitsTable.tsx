import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const StarList = (stars: number) => {
  let starList = [];
  for (let i = 0; i < stars; i++) {
    starList.push(<FontAwesomeIcon icon={faStar} />);
  }
  return starList;
};

export const RecruitsTable = ({ recruits }: any) => {
  return (
    <table className="table-fixed flex-1 w-full text-center border border-indigo-600 mx-4">
      <thead className="text-xl border border-indigo-600">
        <tr className="border border-indigo-600">
          <th className="border border-indigo-600">Name</th>
          <th className="border border-indigo-600">Position</th>
          <th className="border border-indigo-600">Year</th>
          <th className="border border-indigo-600">Stars</th>
          <th className="border border-indigo-600">Rating</th>
        </tr>
      </thead>
      {recruits.map((recruit: any) => (
        <tbody className="border border-indigo-600" key={recruit.id}>
          <tr className="border border-indigo-600">
            <td className="border border-indigo-600">{recruit.name}</td>
            <td className="border border-indigo-600">{recruit.position}</td>
            <td className="border border-indigo-600">{recruit.year}</td>
            <td className="border border-indigo-600">
              {StarList(recruit.stars)}
            </td>
            <td className="border border-indigo-600">{recruit.rating}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default RecruitsTable;
