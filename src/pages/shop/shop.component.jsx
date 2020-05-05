import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import { selectCollections } from '../../redux/shop/shop.selectors.js';

const ShopPage = (props) => {
    return (
        <div className="shop-page">
            {
                props.collections.map(collection => {
                    return <CollectionPreview key={collection.id} title={collection.title} items={collection.items}/>
                })
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})


export default connect(mapStateToProps)(ShopPage);


// this.state = { collections: SHOP_DATA }
// const SHOP_DATA = [
//     {
//       id: 1,
//       title: 'Hats',
//       routeName: 'hats',
//       items: [
//         {
//           id: 1,
//           name: 'Brown Brim',
//           imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
//           price: 25
//         },
//         {
//           id: 2,
//           name: 'Blue Beanie',
//           imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
//           price: 18
//         },