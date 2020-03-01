import React, { PureComponent } from 'react'
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/CollectionPage';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop-actions'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebaseUtils';

class ShopPage extends PureComponent {

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionMap);
    })
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page" >
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    )
  }
}


export default connect(null, { updateCollections })(ShopPage);