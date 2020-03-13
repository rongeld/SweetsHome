import React, { PureComponent } from 'react';
import Header from './components/header/Header'
import { connect } from 'react-redux'
import Routes from './components/routes/routes'
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user-selectors';
import FlashOnAdd from './components/flash-on-add/FlashOnAdd';

class App extends PureComponent {
  render() {
    const { currentUser } = this.props;
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
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

export default connect(mapStateToProps)(App);
