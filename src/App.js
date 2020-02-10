import React, { PureComponent } from 'react';
import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Header from './components/header/Header'
import SignFormPage from './pages/sign-form/SignFormPage'
import { auth, createUserProfileDocument } from './firebase/firebaseUtils';
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user-actions';

class App extends PureComponent {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
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
}

export default connect(null, { setCurrentUser })(App);
