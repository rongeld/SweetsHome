import React from 'react'
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/CollectionPage';

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
)


export default ShopPage;