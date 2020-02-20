import { CartActionTypes } from './cart-types';

export const toggleCartDropdown = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
})

export const addCartItem = (payload) => ({
    type: CartActionTypes.ADD_CART_ITEM,
    payload,
})

export const removeCartItem = (id) => ({
    type: CartActionTypes.REMOVE_CART_ITEM,
    payload: id,
})