import React, { useContext, useEffect } from "react";

import { Context } from "utils/context";
import { LINK_NEW_ORDER, POST_DATA } from "utils/consts";

import Icons from "UI/Icons";
import Button from "UI/Button";
import ProductInCart from "components/Products/ProductInCart";
import CartStatus from "components/Pages/Cart/CartStatus";
import setTitle from "utils/setTitle";
import Loader from "components/Loader";

import classes from "./CartPage.module.scss";

const CartPage = () => {
  const {
    fetching,
    state: { cartProductList, orderStatus },
    loading,
  } = useContext(Context);

  const totalPrice = cartProductList
    .reduce((sum, item) => sum + item.price * item.amount, 0)
    .toFixed(2);

  const onHandlerCheckout = () =>
    fetching(POST_DATA, LINK_NEW_ORDER, { cartProductList, totalPrice });

  useEffect(() => setTitle("Cart"), []);

  return (
    <div className={classes.content}>
      <h2 className={classes.title}>Cart</h2>
      {loading ? (
        <Loader />
      ) : cartProductList.length ? (
        <div className={classes.cartItems}>
          {cartProductList.map((productItem) => {
            return <ProductInCart key={productItem._id} item={productItem} />;
          })}
          <div className={classes.totalPriceBlock}>
            <p className={classes.text}>Total price</p>
            <Icons icon={"price"} />
            <p>{totalPrice}</p>
          </div>
          <div className={classes.checkout} onClick={onHandlerCheckout}>
            <Button>Checkout</Button>
          </div>
        </div>
      ) : (
        <CartStatus isOrder={orderStatus} />
      )}
    </div>
  );
};

export default CartPage;
