import React from "react";

import classes from "./CardWrapper.module.scss";

const CardWrapper = ({ children }) => {
  return <div className={classes.wrapper}>{children}</div>;
};

export default CardWrapper;
