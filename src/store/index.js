import { createStore, applyMiddleware, compose } from 'redux';
import { principalReducer } from '../reducers';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const initialState = {
    movie: {},
    results : [],
    inputMovie: "",
    usedSearch: false,
};

export const store = createStore(
    principalReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
)