import React, { PureComponent } from 'react'
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import { createStructuredSelector } from 'reselect';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/CollectionPage';
import { connect } from 'react-redux';
import WithSpinner from '../../components/with-spinner/WithSpinner';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop-selector'

import { fetchCollectionsStartAsync } from '../../redux/shop/shop-actions';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends PureComponent {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync()
  }

  render() {
    const { match, isCollectionLoaded } = this.props;
    return (
      <div className="shop-page" >
        <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={!isCollectionLoaded} {...props} />} />
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />} />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({ isCollectionLoaded: selectIsCollectionsLoaded })

export default connect(mapStateToProps, { fetchCollectionsStartAsync })(ShopPage);