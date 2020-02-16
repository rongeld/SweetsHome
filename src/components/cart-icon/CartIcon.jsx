import React from 'react'
import { connect } from 'react-redux'
import { toggleCartDropdown } from '../../redux/cart/cart-actions';

import { ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg'

const CartIcon = ({toggleCartDropdown}) => (
    <div className="cart-icon" onClick={toggleCartDropdown}>
        <ShopingIcon className="shopping-icon" />
        <span className="item-count">0</span>
    </div>
)

export default connect(null, { toggleCartDropdown })(CartIcon)