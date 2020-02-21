import { CartActionTypes } from './cart-types';

export const toggleCartDropdown = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
})

export const addCartItem = (item) => {
    console.log('object')
    return {
        type: CartActionTypes.ADD_CART_ITEM,
        payload: item,
    }
}

export const removeCartItem = (id) => ({
    type: CartActionTypes.REMOVE_CART_ITEM,
    payload: id,
})