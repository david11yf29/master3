import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { selectCollections } from '../../redux/shop/shop.selectors.js';

import './collections-overview.styles.scss';

const CollectionsOverview = (props) => (
    <div className="collections-overview">
        {
            props.collections.map(collection => {
                return <CollectionPreview key={collection.id} title={collection.title} items={collection.items}/>
            })
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview);