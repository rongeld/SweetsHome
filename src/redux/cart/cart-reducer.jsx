import { CartActionTypes } from './cart-types';

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
            const updatedItems = [...state.cartItems];
            const firstItem = {
                ...action.payload,
                amount: 1,
            }
            if (!updatedItems.length) {
                return {
                    ...state,
                    cartItems: [firstItem]
                }
            }

            let indx = null;

            const isUsed = updatedItems.some((item, idx) => {
                if (item.id === action.payload.id) {
                    indx = idx;
                    return true;
                }
            });

            isUsed ?
                updatedItems[indx].amount = updatedItems[indx].amount + 1 :
                updatedItems.push(firstItem);

            return {
                ...state,
                cartItems: updatedItems,
            }
        default:
            return state;
    }
}

export default cartReducer