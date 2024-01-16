import { SearchOptionsDataInterface } from "../constants";

export interface AppState {
  searchString: string;
  searchOptions: SearchOptionsDataInterface[];
  selectedOptionForChips: SearchOptionsDataInterface[];
  lastSelectedItem: SearchOptionsDataInterface | undefined;
}

export type Actions = {
  payload: SearchOptionsDataInterface | string;
  type: string;
};

export const ACTIONS = {
  UPDATE_SEARCH_STRING: "updateSearchString",
  REMOVE_ITEM_FROM_SEARCH_OPTIONS: "removeItemFromSearchOptions",
  ADD_ITEM_TO_SEARCH_OPTIONS: "addItemToSearchOptions",
  ADD_ITEM_TO_SELECTED_OPTIONS_FOR_CHIPS: "addItemToSelectedOptionForChips",
  REMOVE_ITEM_FROM_SELECTED_OPTIONS_FOR_CHIPS:
    "removeItemFromSelectedOptionForChips",
  LAST_SELECTED_ITEM: "lastSelectedItem",
  REMOVE_LAST_SELECTED_ITEM: "removeLastSelectedItem",
};

const reducer = (state: AppState, action: Actions): AppState => {
  switch (action.type) {
    case "updateSearchString": {
      return {
        ...state,
        searchString: action.payload,
      };
    }

    case "removeItemFromSearchOptions": {
      const tmpArr = JSON.parse(JSON.stringify(state.searchOptions));
      tmpArr.splice(
        tmpArr.findIndex(
          (user: SearchOptionsDataInterface) =>
            user.username === action.payload.username
        ),
        1
      );
      return {
        ...state,
        searchOptions: tmpArr,
      };
    }

    case "addItemToSearchOptions": {
      const tmpArr = JSON.parse(JSON.stringify(state.searchOptions));
      tmpArr.push(action.payload);
      return {
        ...state,
        searchOptions: tmpArr,
      };
    }

    case "addItemToSelectedOptionForChips": {
      const tmpArr = JSON.parse(JSON.stringify(state.selectedOptionForChips));
      tmpArr.push(action.payload);
      return {
        ...state,
        selectedOptionForChips: tmpArr,
      };
    }

    case "removeItemFromSelectedOptionForChips": {
      const tmpArr = JSON.parse(JSON.stringify(state.selectedOptionForChips));
      tmpArr.splice(
        tmpArr.findIndex(
          (user: SearchOptionsDataInterface) =>
            user.username === action.payload.username
        ),
        1
      );
      return {
        ...state,
        selectedOptionForChips: tmpArr,
      };
    }

    case "lastSelectedItem": {
      return {
        ...state,
        lastSelectedItem: action.payload,
      };
    }

    case "removeLastSelectedItem": {
      return {
        ...state,
        lastSelectedItem: undefined,
      };
    }
    default:
      return state;
  }
};

export default reducer;
