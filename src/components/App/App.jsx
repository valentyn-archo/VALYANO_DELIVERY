import React, { useReducer } from "react";

import { Context } from "utils/context";
import { getStorage } from "utils/localStorage";
import reducer from "utils/reducer";
import useFetch from "hooks/useFetch";

import MainContent from "components/MainContent";
import MainMenu from "components/Menu/MainMenu";
import Navbar from "components/Menu/Navbar";

import classes from "./App.module.scss";

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    cartProductList: getStorage("cart"),
  });
  const { fetching, loading, error } = useFetch(dispatch);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Context.Provider value={{ state, dispatch, fetching, loading, error }}>
          <div>
            <MainMenu />
            <Navbar />
          </div>
          <div>
            <MainContent />
          </div>
        </Context.Provider>
      </div>
    </div>
  );
};

export default App;
