import React, { useContext } from "react";

import { Context } from "utils/context";
import { ADD_TO_CART, CDN_URL, ORDER_STATUS, UPDATE_CART } from "utils/consts";
import Icons from "UI/Icons";
import CardWrapper from "UI/CardWrapper";

import classes from "./ProductCard.module.scss";

/**
 * @param {Object} item
 * @property {string} id
 * @property {string} name
 * @property {string} imgUrl
 * @property {number} discounts
 * @property {number} price
 * @returns {JSX.Element}
 */

const ProductCard = ({ item }) => {
  const {
    state: { cartProductList },
    dispatch,
  } = useContext(Context);
  const isInCart = cartProductList.find(
    (cartItem) => cartItem._id === item._id
  );
  const price = item.discounts
    ? ((item.price * (100 - item.discounts)) / 100).toFixed(2)
    : item.price;

  const onAddToCart = () => {
    if (isInCart) {
      dispatch({
        type: UPDATE_CART,
        payload: { _id: item._id, amount: isInCart.amount + 1 },
      });
    } else {
      const newItem = { ...item, price, amount: 1 };

      dispatch({ type: ADD_TO_CART, payload: { product: newItem } });
    }

    dispatch({ type: ORDER_STATUS, payload: { orderStatus: false } });
  };

  return (
    <CardWrapper>
      <div className={classes.productImg}>
        <img src={CDN_URL + item.imgUrl} alt={item.name} />
      </div>
      <h3 className={classes.title}>{item.name}</h3>
      <div className={classes.priceBlock}>
        <div className={classes.priceIcon}>
          <Icons icon={"price"} />
        </div>
        <div className={classes.priceText}>{price}</div>
        {!!item.discounts && (
          <div className={classes.oldPriceBlock}>
            <div className={classes.oldPriceText}>{item.price}</div>
          </div>
        )}
        <div className={classes.cartIcon} onClick={onAddToCart}>
          {isInCart && (
            <div className={classes.checkIcon}>
              <Icons icon={"check"} />
            </div>
          )}
          <Icons icon={"addToCart"} />
        </div>
      </div>
    </CardWrapper>
  );
};

export default ProductCard;