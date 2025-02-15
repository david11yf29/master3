import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions.js';

import './collection-item.styles.scss';

 const CollectionItem = (props) => {
     return (
        <div className="collection-item">
            <div
                className="image"
                style={{
                    backgroundImage: `url(${props.item.imageUrl})`
                }} />
            <div className="collection-footer">
                <span className="name">{props.item.name}</span>
                <span className="price">{props.item.price}</span>
            </div>
            <CustomButton inverted onClick={() => props.addItem(props.item)}>Add to cart</CustomButton>
        </div>
     )
 }

 const mapDispatchToProps = (dispatch) => {
     return {
         addItem: (item) => dispatch(addItem(item))
     }
 }

 export default connect(null, mapDispatchToProps)(CollectionItem);