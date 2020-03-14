import { CartActionTypes } from './cart-types';
import { additemToCart, deleteItemFromCart, decreaseAmountCartItemHandler } from './cart-utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_CART_ITEM:
            return {
                ...state,
                cartItems: additemToCart(state.cartItems, action.payload),
            }
        case CartActionTypes.REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: deleteItemFromCart(state.cartItems, action.payload)
            }
        case CartActionTypes.DECREASE_AMOUNT_CART_ITEM:
            return {
                ...state,
                cartItems: decreaseAmountCartItemHandler(state.cartItems, action.payload)
            }
        case CartActionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: [],
            }
        default:
            return state;
    }
}

export default cartReducer