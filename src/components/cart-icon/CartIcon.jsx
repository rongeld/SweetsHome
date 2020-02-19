import React from 'react'
import { connect } from 'react-redux'
import { toggleCartDropdown } from '../../redux/cart/cart-actions';
import { selectCartItemsCount } from '../../redux/cart/cart-selectors';
import { createStructuredSelector } from 'reselect';


import { ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg'

const CartIcon = ({ toggleCartDropdown, counter }) => (
    <div className="cart-icon" onClick={toggleCartDropdown}>
        <ShopingIcon className="shopping-icon" />
        <span className="item-count">{counter}</span>
    </div>
)

const mapStateToProps = createStructuredSelector({
    counter: selectCartItemsCount
})

export default connect(mapStateToProps, { toggleCartDropdown })(CartIcon)