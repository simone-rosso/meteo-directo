import React, { useReducer } from "react";
import AppContext from "../../utils/context";

import * as ACTIONS from "./actions/actions";

import * as appReducer from "./reducers/appReducer";

export const AppProvider = ({ children }: any) => {
  /*
      App actions creators
    */
  const [stateAppReducer, dispatchAppReducer] = useReducer(
    appReducer.AppReducer,
    appReducer.initialState
  );

  const onChangeLocation = (location: string, path: string) => {
    dispatchAppReducer(ACTIONS.change_location(location, path));
  };

  return (
    <AppContext.Provider
      value={{
        goTo: stateAppReducer.goTo,

        changeLocation: (goTo: string, path: string) =>
          onChangeLocation(goTo, path),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
