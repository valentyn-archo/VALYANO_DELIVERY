import React, { useContext } from "react";

import { Context } from "utils/context";

import AppRouter from "components/AppRouter";
import ShowError from "components/ShowError";

import classes from "./MainContent.module.scss";

const MainContent = () => {
  const { error } = useContext(Context);

  return (
    <div className={classes.wrapper}>
      <div className={classes.inner}>
        {error ? <ShowError /> : <AppRouter />}
      </div>
    </div>
  );
};

export default MainContent;
