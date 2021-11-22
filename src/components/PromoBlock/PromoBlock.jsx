import React from "react";

import classes from "./PromoBlock.module.scss";

const PromoBlock = () => {
  return (
    <section className={classes.promoBlock}>
      <div className={classes.promoItem}>
        <img src={"images/discount-promo.png"} alt="Discount Only Today" />
      </div>
      <div className={classes.promoItem}>
        <img src={"images/delivery-promo.png"} alt="Delivery Fast and Free" />
      </div>
    </section>
  );
};

export default PromoBlock;
