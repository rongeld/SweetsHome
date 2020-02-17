import React from 'react'
import Fade from 'react-reveal/Fade';
import CustomButton from '../custom-btn/CustomBtn';

const Cart = () => (
    <Fade top duration={500}>
        <div className="cart-dropdown">
            <div className="cart-items">
                <CustomButton>GO TO CHECKOUT</CustomButton>
            </div>
        </div>
    </Fade>
)

export default Cart;