import React, { useEffect } from 'react';
import Header from './components/header/Header'
import { connect } from 'react-redux'
import Routes from './components/routes/routes'
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user-selectors';
import FlashOnAdd from './components/flash-on-add/FlashOnAdd';
import { checkUserSession } from './redux/user/user-actions'

const App = ({ currentUser, checkUserSession }) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])

  return (
    <div className="app-wrapper">
      <div className="app-body">
        <Header />
        <Routes currentUser={currentUser} />
        <FlashOnAdd />
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

export default connect(mapStateToProps, { checkUserSession })(App);
