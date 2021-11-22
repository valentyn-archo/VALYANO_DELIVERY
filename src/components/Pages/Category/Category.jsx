import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Context } from "utils/context";
import { GET_DATA, LINK_CATEGORY, LINK_FILTER } from "utils/consts";
import setTitle from "utils/setTitle";
import ProductCard from "components/Products/ProductCard";
import CardSkeleton from "UI/CardSkeleton";

import classes from "./Category.module.scss";

const Category = () => {
  const {
    fetching,
    loading,
    state: { products },
  } = useContext(Context);
  const { page } = useParams();

  useEffect(
    () => {
      let queryUrl = LINK_CATEGORY;

      if (["discounts", "popular"].includes(page)) {
        queryUrl = LINK_FILTER;
      }

      setTitle(page);

      fetching(GET_DATA, queryUrl + page);
    },
    // eslint-disable-next-line
    [page]
  );

  return (
    <>
      <h2 className={classes.title}>{page}</h2>
      <div className={classes.productsContainer}>
        {loading
          ? Array.from({ length: 12 }, (_, i) => <CardSkeleton key={i} />)
          : products.map((productItem) => {
              return <ProductCard key={productItem._id} item={productItem} />;
            })}
      </div>
    </>
  );
};

export default Category;
