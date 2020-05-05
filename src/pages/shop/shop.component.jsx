import React from 'react';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const ShopPage = (props) => {
    return (
        <div className="shop-page">
            <CollectionsOverview />
        </div>
    )
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