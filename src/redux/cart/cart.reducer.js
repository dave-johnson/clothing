import CartActionTypes from './cart.types'

const INITIAL_STATE  = {
    hidden: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
    console.log("***** inside cartReducer ")
    console.log(action.type)
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN: 
            console.log("===== toggle hidden")
            return {
                ...state, 
                hidden: !state.hidden
            }
        default: {
            console.log("--- default action type")
            return state
        }
    }
}

export default cartReducer