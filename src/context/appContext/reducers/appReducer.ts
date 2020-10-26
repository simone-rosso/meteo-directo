import { AppContextType } from "../actions/action_types";

export interface AppReducerState {
  goTo?: string;
  path?: string;
}

export const initialState: AppReducerState = {};

export const AppReducer = (
  state: AppReducerState = initialState,
  action: any
) => {
  switch (action.type) {
    case AppContextType.CHANGE_LOCATION:
      return {
        ...state,
        goTO: action.goTo,
        path: action.path,
      };
    default:
      return state;
  }
};
