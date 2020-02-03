import React from 'react';
import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import { Route, BrowserRouter, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={() => <HomePage />} />
        <Route path='/shop' exact component={() => <ShopPage />} />
      </Switch>
    </BrowserRouter>
  )

}

export default App;
