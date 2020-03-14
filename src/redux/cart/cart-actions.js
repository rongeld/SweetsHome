import { CartActionTypes } from './cart-types';

export const toggleCartDropdown = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
})

export const addCartItem = (item) => ({
    type: CartActionTypes.ADD_CART_ITEM,
    payload: item,
})

export const decreaseAmountCartItem = (id) => ({
    type: CartActionTypes.DECREASE_AMOUNT_CART_ITEM,
    payload: id,
})

export const removeCartItem = (id) => ({
    type: CartActionTypes.REMOVE_CART_ITEM,
    payload: id,
})

export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART,
})