import { AppContextType } from "./action_types";

interface ChangeLocationAction {
  type: typeof AppContextType.CHANGE_LOCATION;
  location: string;
}

export type AppContextAction = ChangeLocationAction;

export const change_location = (location: string): ChangeLocationAction => {
  return {
    type: AppContextType.CHANGE_LOCATION,
    location: location,
  };
};
