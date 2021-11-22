import React from "react";

import CardWrapper from "UI/CardWrapper";

import classes from "./CardSkeleton.module.scss";

const CardSkeleton = () => {
  return (
    <CardWrapper>
      <div className={classes.skeletonImg} />
      <div className={classes.skeletonTitle} />
      <div className={classes.skeletonBlockWrapper}>
        <div className={classes.skeletonBlockItem} />
        <div className={classes.skeletonBlockItem} />
      </div>
    </CardWrapper>
  );
};

export default CardSkeleton;
