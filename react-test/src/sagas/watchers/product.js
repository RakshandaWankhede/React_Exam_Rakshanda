import { call, put,takeLatest } from 'redux-saga/effects';
import {getProduct} from '../../api/getProductApi'
import {PRODUCT_SAGA} from '../../actions/actionTypes'
import {storeProductInfo} from '../../actions/productAction'

export function* workerProductSaga(data) {
    try {
        const product = yield call(getProduct,data.data);
        yield put(storeProductInfo(product));
    } catch (e) {
        console.log(e)
    }
  }
  
  export function* watchProductSaga() {
    yield takeLatest(PRODUCT_SAGA, workerProductSaga);
  }