import React, { useContext, useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { Modal } from 'react-responsive-modal';
import { isPossiblePhoneNumber } from "react-phone-number-input";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";

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
import 'react-phone-number-input/style.css';

const CartPage = () => {
  const {
    fetching,
    state: { cartProductList, orderStatus },
    loading,
  } = useContext(Context);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [openModal, setOpenModal] = useState(false);
  const [value, setValue] = useState('');

  const totalPrice = cartProductList.length ? cartProductList
    .reduce((sum, item) => sum + item.price * item.amount, 0)
    .toFixed(2) : 0;

  const onHandlerCheckout = (contactInformation) =>
    fetching(POST_DATA, LINK_NEW_ORDER, { cartProductList, totalPrice, contactInformation });

  const onSubmit = (contactInformation) => {
    setOpenModal(false);
    onHandlerCheckout(contactInformation);
  }

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <PhoneInputWithCountry
                international
                countryCallingCodeEditable={false}
                defaultCountry="UA"
                value={value}
                onChange={setValue}
                className={classes.phoneInput}
                control={control}
                name="phone"
                rules = {{ required: true, validate: isPossiblePhoneNumber }}
              />
              {errors.phoneInput && <p style={{"color": "red"}}>Please enter correct phone number.</p>}
              <input className={classes.textInput} {...register('name', { required: true })} />
              {errors.name && <p style={{"color": "red"}}>Please enter name. It's required.</p>}
              <input className={classes.textInput} {...register('address', { required: true })} />
              {errors.address && <p style={{"color": "red"}}>Please enter address for delivery.</p>}
              <textarea className={classes.textAreaInput} placeholder="Additional information..." {...register('comment')} />
              <input type="submit" />
            </form>
          </Modal>
          {cartProductList.map((productItem) => {
            return <ProductInCart key={productItem._id} item={productItem} />;
          })}
          <div className={classes.totalPriceBlock}>
            <p className={classes.text}>Total price</p>
            <Icons icon={"price"} />
            <p>{totalPrice}</p>
          </div>
          <div className={classes.checkout} onClick={() => setOpenModal(true)}>
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
