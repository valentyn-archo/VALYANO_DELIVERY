import React from "react";

import classes from "./Button.module.scss";

const Button = ({ children }) => {
  return <button className={classes.layout}>{children}</button>;
};

export default Button;
