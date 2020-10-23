import React, { useReducer } from "react";
import Context from "../../utils/context";

import * as ACTIONS from "./actions/actions";

import * as appReducer from "./reducers/appReducer";

import RoutesProvider from "../../routes/routes";

const AppContext = () => {
  /*
      App actions creators
    */
  const [stateAppReducer, dispatchAppReducer] = useReducer(
    appReducer.AppReducer,
    appReducer.initialState
  );

  const onChangeLocation = (location: string) => {
    dispatchAppReducer(ACTIONS.change_location(location));
  };

  return (
    <Context.Provider
      value={{
        location: stateAppReducer.location,

        changeLocation: (location: string) => onChangeLocation(location),
      }}
    >
      <RoutesProvider />
    </Context.Provider>
  );
};

export default AppContext;
