import React from 'react'
import { Link, NavLink  } from 'react-router-dom';
import { auth } from '../../firebase/firebaseUtils'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown'
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user-selectors';

const Header = ({ currentUser, hidden }) => (
    <div className="header" >
        <Link to="/">
            <Logo style={{width: '50px'}} className="logo" />
        </Link>
        <div className="options">
            <NavLink  to='/shop' className='option'>SHOP</NavLink >
            <NavLink  to='/contact' className='option'>CONTACT</NavLink >
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> :
                    <NavLink  to='/signin' className='option'>SIGN IN</NavLink >
            }
            <CartIcon />
        </div>
        {!hidden && <CartDropdown />}
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header);

