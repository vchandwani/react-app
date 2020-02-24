import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import {middleWares} from '../src/configureStore';
import burgerBuilderReducer from '../src/store/reducers/burgerBuilder';
import orderReducer from '../src/store/reducers/order';
import authReducer from '../src/store/reducers/auth';

const rootReducer = combineReducers({
    burgerBuilder: burgerBuilderReducer,
    order: orderReducer,
    auth: authReducer
});

export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middleWares)(createStore);
  return createStoreWithMiddleware(rootReducer,initialState);
}

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

export const checkProps = (component,confirmingProps) => {
  const propError = checkPropTypes(component.propTypes, confirmingProps, 'prop', component.name);
  expect(propError).toBeUndefined();
}