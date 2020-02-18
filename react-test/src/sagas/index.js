import { all, fork } from 'redux-saga/effects'
import {watchLoginSaga} from './watchers/login'
import {watchSearchProductSaga} from './watchers/search'
import{ watchProductSaga }from './watchers/product'

export default function* root() {
    yield all([
        fork(watchLoginSaga),
        fork(watchSearchProductSaga),
        fork(watchProductSaga)
    ])
}
