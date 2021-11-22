import React from "react";
import { useHistory } from "react-router-dom";

import Icons from "UI/Icons";
import Button from "UI/Button";

import classes from "./ShowError.module.scss";

const ShowError = () => {
  const history = useHistory();

  const onClickHandler = () => history.go(0);

  return (
    <div className={classes.box}>
      <p>Server error!</p>
      <p>Please, try later...</p>
      <div className={classes.error}>
        <Icons icon={"error"} />
      </div>
      <div className={classes.continue} onClick={onClickHandler}>
        <Button>Reload page</Button>
      </div>
    </div>
  );
};

export default ShowError;
