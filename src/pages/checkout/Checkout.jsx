import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart-selectors'
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import posed, { PoseGroup } from "react-pose";

const Checkout = ({ cartItems, totalValue }) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            <PoseGroup>
                {cartItems.map((cartItem, i) => <PosedComponent key={cartItem.name} i={i} cartItem={cartItem} />)}
            </PoseGroup>
            
            <div className="total">
                <span>
                    TOTAL: ${totalValue}
                </span>
            </div>
        </div>
    )
}

const PosedComponent = posed(CheckoutItem)({
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
    cartItems: selectCartItems,
    totalValue: selectCartTotal,
})


export default connect(mapStateToProps)(Checkout);
