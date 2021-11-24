import React, { useContext } from "react";

import { Context } from "utils/context";
import { ADD_TO_CART, REMOVE_FROM_CART, ORDER_STATUS } from "utils/consts";
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
  let isInCart = cartProductList.length ? cartProductList.find(
    (cartItem) => cartItem._id === item._id
  ) : false;
  const price = item.discounts
    ? ((item.price * (100 - item.discounts)) / 100).toFixed(2)
    : item.price;

  const onCartClick = () => {
    if (isInCart) {
      dispatch({ type: REMOVE_FROM_CART, payload: { itemID: item._id } });
    } else {
      const processedPrice = parseFloat(price);
      const newItem = { ...item, price: processedPrice, amount: 1 };

      dispatch({ type: ADD_TO_CART, payload: { product: newItem } });
    }

    dispatch({ type: ORDER_STATUS, payload: { orderStatus: false } });
  };

  return (
    <CardWrapper>
      <div className={classes.productImg}>
        <img src={item.imgUrl} alt={item.name} />
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
        <div className={classes.cartIcon} onClick={onCartClick}>
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
