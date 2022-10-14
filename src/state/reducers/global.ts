import { constants } from "../actions/global";

const reducer = (state: any, action: { type: string; payload: any }) => {
  const { type, payload } = action;
  switch (type) {
    case constants.SET_THEME:
      return {
        ...state,
        darkMode: payload,
      };
    default:
      return state;
  }
};

export default reducer;
