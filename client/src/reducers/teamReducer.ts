import { SET_TEAM } from "../constants";

const teamState = {};
const teamReducer = (state = teamState, action: any) => {
  switch (action.type) {
    case SET_TEAM:
      console.log(action.team);
      return { teamInfo: action.team };
    default:
      return state;
  }
};

export default teamReducer;
