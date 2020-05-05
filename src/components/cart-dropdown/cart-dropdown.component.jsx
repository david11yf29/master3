import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors.js';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

import './cart-dropdown.styles.scss';

const CartDropdown = (props) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    props.cartItems.length ? 
                    props.cartItems.map((cartItem) => {
                        return <CartItem key={cartItem.id} item={cartItem} />
                    }) : (
                        <span className="empty-message">Your cart is empty</span>
                    )
                }
            </div>
            <CustomButton 
                onClick={() => {
                    props.history.push('/checkout');
                    props.dispatch(toggleCartHidden())}}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         cartItems: state.cart.cartItems
//     }
// }

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));