export const additemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, amount: cartItem.amount + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...cartItemToAdd, amount: 1 }];
}
export const deleteItemFromCart = (cartItems, id) => cartItems.filter(item => item.id !== id);

export const decreaseAmountCartItemHandler = (cartItems, id) => cartItems.map(item => {
    if (item.id === id && item.amount > 1) {
        return {
            ...item,
            amount: item.amount - 1
        }
    }
    return item;
});
