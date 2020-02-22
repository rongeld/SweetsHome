import React from 'react'

const CartItem = React.forwardRef(({ item: { imageUrl, price, name, amount } }, ref) => (
    <div className="cart-item" ref={ref}>
        {console.log(amount)}
        <img src={imageUrl} alt="item" />
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">{amount} * ${price}</span>
        </div>
    </div>
))

export default CartItem