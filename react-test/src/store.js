import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootreducer from './reducers'
import Saga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootreducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(Saga);

export default store;

