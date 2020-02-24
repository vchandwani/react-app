import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { findByTestAttr, storeFactory } from '../../../../test/testUtil';

import { OrderSummary } from './OrderSummary';

configure({adapter: new Adapter()});


const setup = (initialState={}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<OrderSummary store={store} />);
  return wrapper;
}
describe('<OrderSummary />', () => {
  let wrapper;
    
    beforeEach(() => {
        // wrapper.setProps();
        const initialState = {ingredients: {salad: 1, bacon:1 , cheese:1}, totalPrice: 5.60, error: false, building: true};
        wrapper = setup(initialState);
    });
    it('should render <OrderSummary /> when receiving ingredients and no error', () => {
      console.log(wrapper);
      // expect(wrapper.find(BuildControls)).toHaveLength(1);
  });
});