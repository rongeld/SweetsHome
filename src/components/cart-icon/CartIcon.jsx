import React from 'react'
import { connect } from 'react-redux'
import { toggleCartDropdown } from '../../redux/cart/cart-actions';

import { ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg'

const CartIcon = ({ toggleCartDropdown, counter }) => (
    <div className="cart-icon" onClick={toggleCartDropdown}>
        <ShopingIcon className="shopping-icon" />
        <span className="item-count">{counter}</span>
    </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => {
    let counter = 0;
    cartItems.forEach(item => {
        counter += item.amount
    })

    return { counter };
};

export default connect(mapStateToProps, { toggleCartDropdown })(CartIcon)