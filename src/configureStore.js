import { createStore, applyMiddleware ,combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';

import burgerBuilderReducer from './store/reducers/burgerBuilder';
import orderReducer from './store/reducers/order';
import authReducer from './store/reducers/auth';

const rootReducer = combineReducers({
    burgerBuilder: burgerBuilderReducer,
    order: orderReducer,
    auth: authReducer
});

export const middleWares = [ReduxThunk];
const createStoreWithMiddleWare = applyMiddleware(...middleWares)(createStore);
export default createStoreWithMiddleWare(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());