import { SearchOptionsDataInterface } from "../constants";
import useReducerState from "../hooks/useReducerState";
import { ACTIONS } from "../reducers/reducer";
import Input from "./Input";
import InputSearch from "./SearchOptions";
import User from "./User";

const Chip = () => {
  const { state, dispatch } = useReducerState();

  const handleRemoveAndAdd = (option: SearchOptionsDataInterface) => {
    dispatch({
      type: ACTIONS.REMOVE_ITEM_FROM_SELECTED_OPTIONS_FOR_CHIPS,
      payload: option,
    });
    dispatch({ type: ACTIONS.ADD_ITEM_TO_SEARCH_OPTIONS, payload: option });
  };

  return (
    <div className="flex flex-wrap items-center gap-4 border-b-2 border-blue-600 pb-1">
      {state.selectedOptionForChips.map(
        (user: SearchOptionsDataInterface, key: number) => (
          <User
            key={key}
            user={user}
            handleFunction={handleRemoveAndAdd}
            close
          />
        )
      )}
      <div className="relative">
        <Input />
        <div className="absolute">
          <InputSearch />
        </div>
      </div>
    </div>
  );
};

export default Chip;
