import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors.js';

import './cart-dropdown.styles.scss';

const CartDropdown = (props) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    props.cartItems.map((cartItem) => {
                        return <CartItem key={cartItem.id} item={cartItem} />
                    })
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
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

export default connect(mapStateToProps)(CartDropdown);