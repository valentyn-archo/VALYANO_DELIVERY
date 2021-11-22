import React from "react";
import Carousel from "react-multi-carousel";

import Icons from "UI/Icons";
import ProductCard from "components/Products/ProductCard";
import CardSkeleton from "UI/CardSkeleton";

import "react-multi-carousel/lib/styles.css";
import classes from "./ProductSlider.module.scss";

const ProductSlider = ({ productList, isLoading }) => {
  const responsive = {
    laptop: {
      breakpoint: { max: Infinity, min: 992 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 991, min: 768 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const CustomArrow = ({ onClick, button }) => {
    return (
      <div className={classes[button]} onClick={onClick}>
        <Icons icon={"arrow"} />
      </div>
    );
  };

  return (
    <Carousel
      swipeable={true}
      draggable={true}
      responsive={responsive}
      infinite={true}
      transitionDuration={500}
      containerClass="carousel-container"
      customLeftArrow={<CustomArrow button={"prev"} />}
      customRightArrow={<CustomArrow button={"next"} />}
    >
      {isLoading
        ? Array.from({ length: 9 }, (_, i) => <CardSkeleton key={i} />)
        : productList.map((productItem) => (
            <ProductCard key={productItem._id} item={productItem} />
          ))}
    </Carousel>
  );
};

export default ProductSlider;
