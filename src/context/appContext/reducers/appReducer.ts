import { AppContextType } from "../actions/action_types";

export interface IAppReducerState {
  location: string;
}

export interface IAppReducerActions {
  type: string;
  payload?: any;
}

export const initialState: IAppReducerState = {
  location: "",
};

export const AppReducer = (
  state: IAppReducerState = initialState,
  action: IAppReducerActions
) => {
  switch (action.type) {
    case AppContextType.CHANGE_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    default:
      return state;
  }
};
