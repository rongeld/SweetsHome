import { takeLatest, put, all, call } from 'redux-saga/effects';

import { UserActionTypes } from './user-types';
import { googleProvider, auth, createUserProfileDocument } from '../../firebase/firebaseUtils';
import { signInSuccess, signInFailure } from './user-actions'

export function* getSnapshotFromUser(auth) {
    try {
        const userRef = yield call(createUserProfileDocument, auth);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    } catch (err) {
        yield put(signInFailure(err));
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUser(user);
    } catch (err) {
        yield put(signInFailure(err));
    }
}
export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUser(user);
    } catch (err) {
        yield put(signInFailure(err));
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}
export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* userSagas() {
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart)])
}