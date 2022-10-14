/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, Dispatch, useReducer } from "react";
import globalReducer from "../reducers/global";

type InitialStateType = {
  darkMode: boolean;
};

export const initialState = {
  darkMode: false,
};

export const GlobalContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<any>;
}>({ state: initialState, dispatch: () => {} });

const GlobalProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
