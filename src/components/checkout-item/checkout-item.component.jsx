import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart } from '../../redux/cart/cart.actions.js';

import './checkout-item.styles.scss';

const CheckoutItem = (props) => {
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={props.cartItem.imageUrl} alt='item' />
            </div>
            <span className="name">{props.cartItem.name}</span>
            <span className="quantity">{props.cartItem.quantity}</span>
            <span className="price">{props.cartItem.price}</span>
            <div className="remove-button" onClick={() => props.clearItem(props.cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearItem: item => dispatch(clearItemFromCart(item))
    }
}

export default connect(null, mapDispatchToProps)(CheckoutItem);