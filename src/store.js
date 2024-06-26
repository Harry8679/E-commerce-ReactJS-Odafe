import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const middleware = [thunk];

let store;
try {
    store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)));
} catch (err) {
    store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)));
}

export default store;