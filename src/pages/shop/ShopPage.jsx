import React, { PureComponent } from 'react'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop-actions';

import CollectionOverviewContainer from '../../components/collections-overview/CollectionsOverviewContainer';
import CollectionPageContainer from '../collection/CollectionPageContainer';


class ShopPage extends PureComponent {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart()
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page" >
        <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
      </div>
    )
  }
}

export default connect(null, { fetchCollectionsStart })(ShopPage);