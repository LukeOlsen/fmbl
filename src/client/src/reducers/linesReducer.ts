import { SET_LINES } from "../constants";

const linesState = { lines: null };
const linesReducer = (state = linesState, action: any) => {
  switch (action.type) {
    case SET_LINES:
      console.log(action);
      return { lines: action.lines };
    default:
      return state;
  }
};

export default linesReducer;
