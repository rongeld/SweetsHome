import React from 'react'
import { connect } from 'react-redux';
import { removeCartItem } from '../../redux/cart/cart-actions';

const CheckoutItem = React.forwardRef(({ cartItem: { name, imageUrl, price, id, amount }, removeCartItem }, ref) => {
    return (
        <div className="checkout-item" ref={ref}>
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{amount}</span>
            <span className="price">${price}</span>
            <div className="remove-button" onClick={() => removeCartItem(id)}>&#10008;</div>
        </div>
    )
})

export default connect(null, { removeCartItem }, null, { forwardRef: true })(CheckoutItem)
