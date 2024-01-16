import React, { useReducer, Dispatch } from "react";
import { createContext } from "react";
import reducer, { Actions, AppState } from "../reducers/reducer";
import defaultOptions from "../constants.ts";

export interface ContextValue {
  state: AppState;
  dispatch: Dispatch<Actions>;
}

interface StateProviderProps {
  children: React.ReactNode;
}

export const StateProviderContext = createContext<ContextValue | undefined>(
  undefined
);

const StateProvider: React.FC<StateProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    searchString: "",
    searchOptions: defaultOptions,
    selectedOptionForChips: [],
    lastSelectedItem: undefined,
  });

  return (
    <StateProviderContext.Provider value={{ state, dispatch }}>
      {children}
    </StateProviderContext.Provider>
  );
};

export default StateProvider;
