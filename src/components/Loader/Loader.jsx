import React from "react";

import classes from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={classes.box}>
      <div className={classes.spinner} />
    </div>
  );
};

export default Loader;
