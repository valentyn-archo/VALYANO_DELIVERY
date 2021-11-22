import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { LINK_CART, LINK_HOME, LINK_PAGE } from "utils/consts";

import Home from "components/Pages/Home";
import Category from "components/Pages/Category";
import CartPage from "components/Pages/Cart/CartPage";

const AppRouter = () => {
  return (
    <Switch>
      <Route path={LINK_HOME} component={Home} exact />
      <Route path={LINK_PAGE} component={Category} />
      <Route path={LINK_CART} component={CartPage} />
      <Redirect to={LINK_HOME} />
    </Switch>
  );
};

export default AppRouter;
