import React from 'react'

import CustomButton from '../custom-btn/CustomBtn';
import CartItem from '../cart-item/CartItem';
import { connect } from 'react-redux';
import posed, { PoseGroup } from "react-pose";
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { createStructuredSelector } from 'reselect';

const Cart = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                    <PoseGroup animateOnMount>
                        {
                            cartItems.map(item => <PosedComponent key={item.id} item={item} />)
                        }
                    </PoseGroup>
                    :
                    <span className="empty-message">Your cart is empty</span>
            }

            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    </div>
)

const PosedComponent = posed(CartItem)({
    enter: {
        y: 0, opacity: 1, transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 400,
        }
    },
    exit: {
        y: -50, opacity: 0, transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 400,
        }
    }
});

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(Cart);