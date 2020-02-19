import React, { PureComponent } from 'react';
import { BrowserRouter} from 'react-router-dom'
import Header from './components/header/Header'
import { auth, createUserProfileDocument } from './firebase/firebaseUtils';
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user-actions';
import Routes from './components/routes/routes'
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user-selectors';

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
    const { currentUser } = this.props;
    return (
      <div className="app-wrapper">
        <div className="app-body">
          <BrowserRouter>
            <Header />
            <Routes currentUser={currentUser} />
          </BrowserRouter>
        </div>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

export default connect(mapStateToProps, { setCurrentUser })(App);
