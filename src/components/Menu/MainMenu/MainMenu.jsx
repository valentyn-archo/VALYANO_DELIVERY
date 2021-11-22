import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { LINK_CART, LINK_HOME } from "utils/consts";
import { Context } from "utils/context";
import Icons from "UI/Icons";

import classes from "./MainMenu.module.scss";

const MainMenu = () => {
  const {
    state: { cartProductList },
  } = useContext(Context);
  const productsAmount = cartProductList.length;

  return (
    <div className={classes.menuBar}>
      <div className={classes.logo}>
        <img src={"/images/logo.png"} alt="Logo" />
      </div>
      <div className={classes.menuButtons}>
        <div className={classes.icon}>
          <Link to={LINK_HOME}>
            <Icons icon={"home"} />
          </Link>
        </div>
        <div className={classes.icon}>
          {!!productsAmount && (
            <div className={classes.productsAmount}>{productsAmount}</div>
          )}
          <Link to={LINK_CART}>
            <Icons icon={"cart"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
