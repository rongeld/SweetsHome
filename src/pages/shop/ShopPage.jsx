import React, { PureComponent } from 'react'
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/CollectionPage';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop-actions'

import WithSpinner from '../../components/with-spinner/WithSpinner';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebaseUtils';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)


class ShopPage extends PureComponent {
  unsubscribeFromSnapshot = null;

  state = {
    loading: true
  }

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionMap);
      this.setState({ loading: false });
    })
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page" >
        <Route exact path={`${match.path}`} component={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
        <Route exact path={`${match.path}/:collectionId`} component={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
      </div>
    )
  }
}


export default connect(null, { updateCollections })(ShopPage);