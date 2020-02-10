import React from 'react'
import { Link } from 'react-router-dom';
import {auth} from '../../firebase/firebaseUtils'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {connect} from 'react-redux'

const Header = ({currentUser}) => (
    <div className="header" >
        {console.log(currentUser)}
        <Link to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/contact' className='option'>CONTACT</Link>
            {
                currentUser ? 
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> :
                <Link to='/signin' className='option'>SIGN IN</Link> 
            }
        </div>
    </div>
)

const mapStateToProps = ({user: {currentUser}}) => ({ currentUser })

export default connect(mapStateToProps)(Header);

