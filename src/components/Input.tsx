import React from "react";
import useReducerState from "../hooks/useReducerState";
import { ACTIONS } from "../reducers/reducer";

const Input = () => {
  const { state, dispatch } = useReducerState();
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: ACTIONS.UPDATE_SEARCH_STRING, payload: e.target.value });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === "Backspace" &&
      !state.searchString &&
      !state.lastSelectedItem
    ) {
      const lastItem = state.selectedOptionForChips.slice(-1)[0];
      dispatch({
        type: ACTIONS.LAST_SELECTED_ITEM,
        payload: lastItem,
      });
      return;
    }

    if (
      e.key === "Backspace" &&
      !state.searchString &&
      state.lastSelectedItem
    ) {
      dispatch({
        type: ACTIONS.REMOVE_ITEM_FROM_SELECTED_OPTIONS_FOR_CHIPS,
        payload: state.lastSelectedItem,
      });
      dispatch({ type: ACTIONS.REMOVE_LAST_SELECTED_ITEM, payload: undefined });
    }
  };
  return (
    <input
      autoFocus
      type="text"
      value={state.searchString}
      onKeyDown={handleKeyDown}
      onChange={handleInput}
      className=" p-2 rounded-xl border-0 outline-none text-xl"
      placeholder="Add new user..."
    />
  );
};

export default Input;
