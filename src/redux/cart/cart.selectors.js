import { createSelector } from 'reselect';

// function selectCart(state) => {
//     return state.cart
// }


const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
    selectCart,
    cart => cart.cartItems
)

// createSelector(selectCart, function(cart) {
// return cart.cartItems
// })

export const selectCartHidden = createSelector(
    selectCart,
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    selectCartItems,
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => {
        return accumulatedQuantity + cartItem.quantity
    }, 0)
)

export const selectCartTotal = createSelector(
    selectCartItems,
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => {
        return accumulatedQuantity + cartItem.quantity * cartItem.price
    }, 0)

)