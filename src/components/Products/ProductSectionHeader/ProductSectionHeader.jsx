import React from "react";
import { Link } from "react-router-dom";

import { LINK_CATEGORY } from "utils/consts";

import classes from "./ProductSectionHeader.module.scss";

const ProductSectionHeader = ({ title, link }) => {
  return (
    <div className={classes.box}>
      <h2 className={classes.title}>{title}</h2>
      <div className={classes.line} />
      <Link to={LINK_CATEGORY + link}>
        <button className={classes.moreButton}>show more</button>
      </Link>
    </div>
  );
};

export default ProductSectionHeader;
