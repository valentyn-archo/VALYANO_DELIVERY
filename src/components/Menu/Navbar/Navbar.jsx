import React from "react";
import { Link } from "react-router-dom";

import { LINK_CATEGORY } from "utils/consts";

import classes from "./Navbar.module.scss";

const Navbar = () => {
  const menuItem = (name) => {
    return (
      <div className={classes.menuBoxWrapper}>
        <Link to={LINK_CATEGORY + name}>
          <div className={classes.menuBoxInner}>
            <div className={classes.iconBlock}>
              <img src={`/images/icons/${name}.png`} alt={name} />
            </div>
            <div className={classes.categoryName}>{name}</div>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <div className={classes.wrapper}>
      {menuItem("pizza")}
      {menuItem("burgers")}
      {menuItem("drinks")}
      {menuItem("desserts")}
      {menuItem("salads")}
    </div>
  );
};

export default Navbar;
