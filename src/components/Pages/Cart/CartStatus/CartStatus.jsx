import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { LINK_HOME, ORDER_STATUS } from "utils/consts";
import { Context } from "utils/context";

import Icons from "UI/Icons";
import Button from "UI/Button/Button";

import classes from "./CartStatus.module.scss";

const CartStatus = ({ isOrder }) => {
  const { dispatch } = useContext(Context);
  const history = useHistory();

  const onHandleContinue = () => {
    dispatch({ type: ORDER_STATUS, payload: { orderStatus: false } });
    history.push(LINK_HOME);
  };

  return (
    <div className={classes.body}>
      {isOrder ? (
        <>
          <p>Thank you for your order!</p>
          <p>The courier will deliver your order soon.</p>
          <img src={"images/courier.png"} alt="Courier" />
        </>
      ) : (
        <>
          <p>Your cart is currently empty!</p>
          <Icons icon={"empty-cart"} />
        </>
      )}
      <div className={classes.continue} onClick={onHandleContinue}>
        <Button>Continue shopping</Button>
      </div>
    </div>
  );
};

export default CartStatus;
