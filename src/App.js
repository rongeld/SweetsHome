import React from 'react';
import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Header from './components/header/Header'
import SignFormPage from './pages/sign-form/SignFormPage'

function App() {
  return (
    <div className="app-wrapper">
      <div className="app-body">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path='/' exact component={() => <HomePage />} />
            <Route path='/shop' component={() => <ShopPage />} />
            <Route path='/signin' component={() => <SignFormPage />} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>

  )

}

export default App;
