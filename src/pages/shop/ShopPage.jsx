import React, { PureComponent } from 'react'
import PreviewCollection from '../../components/preview-collection/PreviewCollection'
import SHOP_DATA from './shop.data.js';
class ShopPage extends PureComponent {
  state = {
    collections: SHOP_DATA
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
          {
            collections.map(({ id, ...otherCollectionProps }) => (
              <PreviewCollection key={id} {...otherCollectionProps} />
            ))
          }
      </div>
    )
  }
}

export default ShopPage