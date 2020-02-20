import React from 'react'

import CustomButton from '../custom-btn/CustomBtn';
import CartItem from '../cart-item/CartItem';
import { connect } from 'react-redux';
import posed, { PoseGroup } from "react-pose";
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartDropdown } from '../../redux/cart/cart-actions';

const Cart = ({ cartItems, history, toggleCartDropdown }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                    <PoseGroup animateOnMount>
                        {
                            cartItems.map((item, i) => <PosedComponent i={i} key={item.id} item={item} />)
                        }
                    </PoseGroup>
                    :
                    <span className="empty-message">Your cart is empty</span>
            }

            <CustomButton onClick={() => { history.push('/checkout'); toggleCartDropdown() }}>GO TO CHECKOUT</CustomButton>
        </div>
    </div>
)

const PosedComponent = posed(CartItem)({
    enter: {
        x: 0, opacity: 1, transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 400,
        },
        delay: ({ i }) => i * 100,
    },
    exit: {
        x: -50, opacity: 0, transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 400,
        }
    }
});

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps, { toggleCartDropdown })(Cart));