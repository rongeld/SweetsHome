import React, { PureComponent } from 'react';
import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Header from './components/header/Header'
import SignFormPage from './pages/sign-form/SignFormPage'
import {auth} from './firebase/firebaseUtils';

class App extends PureComponent {

  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => this.setState({currentUser: user}));
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  

  render() {
    const {currentUser} = this.state;
    return (
      <div className="app-wrapper">
        <div className="app-body">
          <BrowserRouter>
            <Header currentUser={currentUser} />
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


}

export default App;
