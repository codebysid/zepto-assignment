import { useContext } from "react";
import { StateProviderContext } from "../providers/StateProvider";

const useReducerState = () => {
  const context = useContext(StateProviderContext);
  if (!context) return null;
  return context;
};

export default useReducerState;
