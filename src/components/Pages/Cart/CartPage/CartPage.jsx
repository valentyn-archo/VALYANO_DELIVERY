import React, { useContext, useEffect, useState } from "react";
import { Modal } from 'react-responsive-modal';

import { Context } from "utils/context";
import { LINK_NEW_ORDER, POST_DATA } from "utils/consts";

import Icons from "UI/Icons";
import Button from "UI/Button";
import ProductInCart from "components/Products/ProductInCart";
import CartStatus from "components/Pages/Cart/CartStatus";
import setTitle from "utils/setTitle";
import Loader from "components/Loader";

import classes from "./CartPage.module.scss";

import 'react-responsive-modal/styles.css';

const CartPage = () => {
  const {
    fetching,
    state: { cartProductList, orderStatus },
    loading,
  } = useContext(Context);

  const [openModal, setOpenModal] = useState(false);

  const totalPrice = cartProductList.length ? cartProductList
    .reduce((sum, item) => sum + item.price * item.amount, 0)
    .toFixed(2) : 0;

  // eslint-disable-next-line no-unused-vars
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
          <Modal 
            open={openModal}
            onClose={() => setOpenModal(false)}
            center
            classNames={{
              overlay: classes.customOverlay,
              modal: classes.customModal,
            }}
          >
            Here you need to provide any information...
          </Modal>
          {cartProductList.map((productItem) => {
            return <ProductInCart key={productItem._id} item={productItem} />;
          })}
          <div className={classes.totalPriceBlock}>
            <p className={classes.text}>Total price</p>
            <Icons icon={"price"} />
            <p>{totalPrice}</p>
          </div>
          <div className={classes.checkout} onClick={() => setOpenModal(true)} /*onClick={onHandlerCheckout} */>
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
