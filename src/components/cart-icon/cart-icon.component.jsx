import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors.js';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = (props) => {
    return (
        <div className="cart-icon" onClick={props.toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{props.itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
}

// const mapStateToProps = (state) => {
//     console.log("I am called");
//     return {
//         itemCount: state.cart.cartItems.reduce((accumulatedQuantity, cartItem) => {
//             return accumulatedQuantity + cartItem.quantity
//         }, 0)
//     }
// }

const mapStateToProps = (state) => {
    console.log("I am called by cart-icon");
    return {
        itemCount: selectCartItemsCount(state)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

