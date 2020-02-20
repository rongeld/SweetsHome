import React from 'react'

const CheckoutItem = React.forwardRef(({ cartItem: { name, imageUrl, price, amount } }, ref) => {
    return (
        <div className="checkout-item" ref={ref}>
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{amount}</span>
            <span className="price">{price}</span>
            <div className="remove-button">&#10008;</div>
        </div>
    )
})

export default CheckoutItem
