import React from "react";
import { Route, withRouter, Redirect } from "react-router-dom";
import { AnimatedSwitch } from '../animation/AnimatedSwitch'

import HomePage from '../../pages/homePage/HomePage';
import ShopPage from '../../pages/shop/ShopPage';
import SignFormPage from '../../pages/sign-form/SignFormPage'

const routes = [
  {
    component: HomePage,
    path: "/"
  },
  {
    component: ShopPage,
    path: "/shop"
  },
  {
    path: "/signin",
    render: true,
    redirect: SignFormPage
  },
];

const Routes = withRouter(({ location, currentUser }) => {
  return (
    <AnimatedSwitch location={location}>
      {routes.map(route => {
        return (
          <Route
            exact
            key={route.path}
            path={route.path}
            component={route.component}
            render={route.render ? (() => currentUser ? <Redirect to='/' /> : <route.redirect />) : null}
          />
        );
      })}
    </AnimatedSwitch>
  );
});

export default Routes;