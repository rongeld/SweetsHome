export const additemToCart = (cartItems, cartItemToAdd) => {
    const cartItemsUpdated = [...cartItems];
    const isUsed = cartItemsUpdated.find(item => item.id === cartItemToAdd.id);
    isUsed ?
        cartItemsUpdated[cartItemsUpdated.indexOf(isUsed)].amount++ :
        cartItemsUpdated.push({ ...cartItemToAdd, amount: 1 });
    return cartItemsUpdated;
}
export const deleteItemFromCart = (cartItems, id) => cartItems.filter(item => item.id !== id);
