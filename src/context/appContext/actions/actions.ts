import { AppContextType } from "./action_types";

interface ChangeLocationAction {
  type: typeof AppContextType.CHANGE_LOCATION;
  goTo: string;
  path: string;
}

export type AppContextAction = ChangeLocationAction;

export const change_location = (
  goTo: string,
  path: string
): ChangeLocationAction => {
  return {
    type: AppContextType.CHANGE_LOCATION,
    goTo,
    path,
  };
};
