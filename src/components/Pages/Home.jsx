import React, { useContext, useEffect } from "react";

import { Context } from "utils/context";
import {
  GET_DATA,
  LINK_DISCOUNTS,
  LINK_POPULAR,
} from "utils/consts";

import PromoBlock from "components/PromoBlock";
import ProductSectionHeader from "components/Products/ProductSectionHeader";
import ProductSlider from "components/Products/ProductSlider";
import setTitle from "utils/setTitle";

const Home = () => {
  const {
    fetching,
    state: { products },
    loading,
  } = useContext(Context);

  /**
   * @param {Object} item
   * @property {number} discounts
   * @property {boolean} popular
   */
  const discountedProducts = products.filter((item) => item.discounts);
  const popularProducts = products.filter(
    (item) => item.popular && !item.discounts
  );

  useEffect(
    () => {
      fetching(GET_DATA);

      setTitle("Home");
    },
    // eslint-disable-next-line
    []
  );

  return (
    <div>
      <PromoBlock />
      <ProductSectionHeader title={"Discounts"} link={LINK_DISCOUNTS} />
      <ProductSlider productList={discountedProducts} isLoading={loading} />
      <ProductSectionHeader title={"Most popular"} link={LINK_POPULAR} />
      <ProductSlider productList={popularProducts} isLoading={loading} />
    </div>
  );
};

export default Home;
