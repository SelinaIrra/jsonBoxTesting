import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import ajax from '../services/axios';
import userSaga from './user/saga';
import { userReducer } from './user';
import { systemReducer } from './system';

export function* rootSaga() {
  yield all([
    fork(userSaga),
  ]);
}

export const reducers = combineReducers({
  user: userReducer,
  system: systemReducer,
});

const middleware = createSagaMiddleware({
  context: { ajax },
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(middleware)));

middleware.run(rootSaga);

export default store;
