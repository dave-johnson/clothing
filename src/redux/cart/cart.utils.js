export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existgingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)

    if (existgingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existgingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)

    if (existgingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map(cartItem => 
        cartItem.id === cartItemToRemove.id 
            ? {...cartItem, quantity: cartItem.quantity -1}
            : cartItem
    )
}