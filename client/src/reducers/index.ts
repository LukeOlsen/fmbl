const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "CONSOLE_SUCCESS":
      return {
        loading: false,
        error: false,
      };
    case "CONSOLE_START":
      return {
        loading: true,
        error: false,
      };
    case "FETCH_SUCCEEDED":
      return action.returnInfo;
    case "SET_TEAM":
      return { teamInfo: action.team };
    default:
      return state;
  }
};

export default reducer;
