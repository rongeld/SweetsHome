import React from "react";
import { Route, withRouter, Redirect } from "react-router-dom";
import { AnimatedSwitch } from '../animation/AnimatedSwitch'

import HomePage from '../../pages/homePage/HomePage';
import ShopPage from '../../pages/shop/ShopPage';
import SignFormPage from '../../pages/sign-form/SignFormPage'
import Checkout from '../../pages/checkout/Checkout'

const Routes = withRouter(({ location, currentUser }) => {
  return (
    <AnimatedSwitch location={location}>
      <Route path='/' exact component={HomePage} key='HomePage' />
      <Route path='/shop' component={ShopPage} key='ShopPage' />
      <Route path='/checkout' component={Checkout} key='Checkout' />
      <Route exact path='/signin' render={() => currentUser ? <Redirect to='/' /> : <SignFormPage />} key='SignFormPage' />
    </AnimatedSwitch>
  );
});

export default Routes;