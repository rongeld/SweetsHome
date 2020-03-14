import { takeLatest, call, put, all } from 'redux-saga/effects';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebaseUtils';
import ShopActionTypes from './shop-types';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop-actions';

export function* fetchCollectionAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get(); // async GET req
        const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionMap))
    } catch (err) {
        put(fetchCollectionsFailure(err))
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionAsync)
}

export function* shopSagas() {
    yield all([
        call(fetchCollectionsStart), 
    ])
}