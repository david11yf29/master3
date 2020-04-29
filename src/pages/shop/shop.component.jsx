import React from 'react';

import SHOP_DATA from './shop.data.js';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor() {
        super();
        this.state = {
            collections: SHOP_DATA
        }
    }
    
    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(collection => {
                        return <CollectionPreview key={collection.id} title={collection.title} items={collection.items}/>
                    })
                }
            </div>
        )
    }
}

export default ShopPage;


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