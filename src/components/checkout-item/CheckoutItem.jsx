import React from 'react';
import { connect } from 'react-redux';

import {
    removeCartItem,
    addCartItem,
    decreaseAmountCartItem,
} from '../../redux/cart/cart-actions';

const CheckoutItem = React.forwardRef(({ cartItem, addCartItem, removeCartItem, decreaseAmountCartItem }, ref) => {
    const { name, imageUrl, price, amount, id } = cartItem;
    return (
        <div className='checkout-item' ref={ref}>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => decreaseAmountCartItem(id)}>
                    &#10094;
                </div>
                <span className='value'>{amount}</span>
                <div className='arrow' onClick={() => addCartItem(cartItem)}>
                    &#10095;
                </div>
            </span>
            <span className='price'>${price}</span>
            <div className='remove-button' onClick={() => removeCartItem(id)}>
                &#10005;
            </div>
        </div>
    );
});

export default connect(null, { removeCartItem, addCartItem, decreaseAmountCartItem }, null, { forwardRef: true })(CheckoutItem)
