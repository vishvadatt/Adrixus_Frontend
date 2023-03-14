import {applyMiddleware,createStore} from 'redux'
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../Reducer/rootReducer';
import rootSaga from '../Sagas/rootSaga';
const sagaMiddleWare = createSagaMiddleware();

const store = createStore(rootReducer,applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);

export default store;   