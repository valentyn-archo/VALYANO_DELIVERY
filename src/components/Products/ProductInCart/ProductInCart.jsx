import React, { useContext } from "react";

import { Context } from "utils/context";
import {REMOVE_FROM_CART, UPDATE_CART } from "utils/consts";

import Icons from "UI/Icons";

import classes from "./ProductInCart.module.scss";

const ProductInCart = ({ item }) => {
  const { dispatch } = useContext(Context);

  const onRemoveFromCart = () =>
    dispatch({ type: REMOVE_FROM_CART, payload: { itemID: item._id } });

  const onIncrementAmount = () => {
    if (item.amount < 99) {
      dispatch({
        type: UPDATE_CART,
        payload: { _id: item._id, amount: item.amount + 1 },
      });
    }
  };

  const onDecrementAmount = () => {
    if (item.amount > 1) {
      dispatch({
        type: UPDATE_CART,
        payload: { _id: item._id, amount: item.amount - 1 },
      });
    }
  };

  return (
    <div className={classes.box}>
      <div className={classes.productImg}>
        <img src={item.imgUrl} alt={item.name} />
      </div>
      <div className={classes.productInfo}>
        <p className={classes.productName}>{item.name}</p>
        <div className={classes.productInfoRow}>
          <div className={classes.productAmount}>
            <button onClick={onDecrementAmount}>
              <Icons icon={"minus"} />
            </button>
            <span>{item.amount}</span>
            <button onClick={onIncrementAmount}>
              <Icons icon={"plus"} />
            </button>
          </div>
          <div className={classes.totalPrice}>
            <span>{(item.price * item.amount).toFixed(2)}</span>
            <Icons icon={"price"} />
          </div>
        </div>
      </div>
      <div className={classes.deleteBtn}>
        <button onClick={onRemoveFromCart}>
          <Icons icon={"delete"} />
        </button>
      </div>
    </div>
  );
};

export default ProductInCart;
