import React from 'react'
import PreviewCollection from '../../components/preview-collection/PreviewCollection'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux';
import { selectShopCollections } from '../../redux/shop/shop-selector'

const CollectionsOverview = ({ collections }) => {
    return (
        <div className="collections-overview">
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <PreviewCollection key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
  })
  
  export default connect(mapStateToProps)(CollectionsOverview);

