import { createStore, applyMiddleware, compose } from 'redux';
import { principalReducer } from '../reducers';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    principalReducer,
    composeEnhancers(applyMiddleware(thunk))
)