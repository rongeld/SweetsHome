export const additemToCart = (cartItems, cartItemToAdd) => {
    // const cartItemsUpdated = [...cartItems];
    // const isUsed = cartItemsUpdated.find(item => item.id === cartItemToAdd.id);
    // isUsed ?
    //     cartItemsUpdated[cartItemsUpdated.indexOf(isUsed)].amount++ :
    //     cartItemsUpdated.push({ ...cartItemToAdd, amount: 1 });
    // return cartItemsUpdated;

    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
      );
    
      if (existingCartItem) {
        return cartItems.map(cartItem =>
          cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
    
      return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}
export const deleteItemFromCart = (cartItems, id) => cartItems.filter(item => item.id !== id);
