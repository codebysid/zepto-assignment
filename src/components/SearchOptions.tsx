import { SearchOptionsDataInterface } from "../constants.ts";
import User from "./User.tsx";
import { ACTIONS } from "../reducers/reducer.ts";
import useReducerState from "../hooks/useReducerState.tsx";

function InputSearch() {
  const { state, dispatch } = useReducerState();

  const handleAddAndRemoveOptions = (option: SearchOptionsDataInterface) => {
    dispatch({
      type: ACTIONS.ADD_ITEM_TO_SELECTED_OPTIONS_FOR_CHIPS,
      payload: option,
    });
    dispatch({
      type: ACTIONS.REMOVE_ITEM_FROM_SEARCH_OPTIONS,
      payload: option,
    });
  };

  return (
    <div className="flex flex-col gap-6 h-72 overflow-auto mt-4 shadow-2xl options">
      {state.searchOptions &&
        state.searchOptions
          .filter((ele: SearchOptionsDataInterface) => {
            if (!state.searchString) return state.searchOptions;
            return ele.username
              ?.toLowerCase()
              .includes(state.searchString.toLowerCase());
          })
          .map((user: SearchOptionsDataInterface, i: number) => {
            return (
              <User
                key={i}
                user={user}
                handleFunction={handleAddAndRemoveOptions}
              />
            );
          })}
    </div>
  );
}

export default InputSearch;
