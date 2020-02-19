export const additemToCart = (cartItems, cartItemToAdd) => {
    const cartItemsUpdated = [...cartItems];
    const isUsed = cartItemsUpdated.find(item => item.id === cartItemToAdd.id);
    if (isUsed) {
        const usedElementIndex = cartItemsUpdated[cartItemsUpdated.indexOf(isUsed)];
        usedElementIndex.amount = usedElementIndex.amount + 1
    } else {
        cartItemsUpdated.push({
            ...cartItemToAdd,
            amount: 1,
        });
    }
         
    
    return cartItemsUpdated;
}