import React from 'react'
import { auth } from '../../firebase/firebaseUtils'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown'
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user-selectors';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo style={{ width: '50px' }} className="logo" />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink >
            <OptionLink to='/contact'>CONTACT</OptionLink >
            {
                currentUser ?
                    <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink> :
                    <OptionLink to='/signin'>SIGN IN</OptionLink >
            }
            <CartIcon />
        </OptionsContainer>
        {!hidden && <CartDropdown />}
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header);

