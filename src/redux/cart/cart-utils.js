export const additemToCart = (cartItems, cartItemToAdd) => {
    
    const cartItemsUpdated = [...cartItems];
    let indx = null;

    const isUsed = cartItemsUpdated.find((item, idx) => {
        if (item.id === cartItemToAdd.id) {
            indx = idx;
            return true;
        }
    });
    isUsed ?
        cartItemsUpdated[indx].amount = cartItemsUpdated[indx].amount + 1 :
        cartItemsUpdated.push({
            ...cartItemToAdd,
            amount: 1,
        });

    return cartItemsUpdated;
}