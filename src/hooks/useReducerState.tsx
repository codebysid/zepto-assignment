import { useContext } from "react";
import { StateProviderContext } from "../providers/StateProvider";

const useReducerState = () => {
  const context = useContext(StateProviderContext);
  if (!context) throw new Error("Null");
  return context;
};

export default useReducerState;
