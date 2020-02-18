import { call, put,takeLatest } from 'redux-saga/effects';
import {search} from '../../api/searchApi'
import {SEARCH_PRODUCTS_SAGA} from '../../actions/actionTypes'
import {storeProductsInfo} from '../../actions/searchAction'

export function* workerSearchProductSaga(data) {
    try {
        const products = yield call(search,data.data);
        yield put(storeProductsInfo(products));
    } catch (e) {
        console.log(e)
    }
  }
  
  export function* watchSearchProductSaga() {
    yield takeLatest(SEARCH_PRODUCTS_SAGA, workerSearchProductSaga);
  }