import React, { useEffect, useState, useRef } from 'react';
import Header from './components/header/Header'
import { connect } from 'react-redux'
import Routes from './components/routes/routes'
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user-selectors';
import FlashOnAdd from './components/flash-on-add/FlashOnAdd';
import { checkUserSession } from './redux/user/user-actions'
import pizza from './assets/pizza.gif'
import ahShit from './assets/gta.mp3'

const App = ({ currentUser, checkUserSession }) => {
  const [surprise, setSurprise] = useState('');
  const audio = useRef();
  useEffect(() => {
    checkUserSession();


    document.addEventListener('keydown', (e) => {
      const res = String.fromCharCode(e.which);
      setSurprise(prevstate => prevstate ? prevstate + res : res)
      setTimeout(() => {
        setSurprise('');
      }, 2000);
    });
  }, [checkUserSession])

  if (surprise === 'PIZZA') {
    audio.current.play();
    const node = document.createElement('DIV');
    node.style.backgroundImage = `url(${pizza})`;
    node.style.backgroundSize = '100%';
    node.style.backgroundRepeat = 'no-repeat';
    node.style.width = '400px';
    node.style.left = '20%';
    node.style.height = '400px';
    node.style.bottom = '0';
    node.style.position = 'absolute';
    document.body.appendChild(node);
    setTimeout(() => {
      document.body.removeChild(document.body.lastElementChild);
    }, 2800);
  }

  return (
    <div className="app-wrapper">
      <div className="app-body">
        <Header />
        <Routes currentUser={currentUser} />
        <FlashOnAdd />
      </div>
      <audio ref={audio} src={ahShit} />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

export default connect(mapStateToProps, { checkUserSession })(App);
