import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { storeFactory } from '../../../../test/testUtils';

import OrderSummary from './OrderSummary';
import { TransitionGroup } from 'react-transition-group';

configure({adapter: new Adapter()});


const setup = (initialState={ingredients: {salad: 1, bacon:1 , cheese:1, meat : 0}, totalPrice: 5.60, error: false, building: true}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<OrderSummary ingredients={{salad: 1, bacon:1 , cheese:1, meat:0}} price={5.60} error={false} building={true} store={store} />).dive();
  return wrapper;
}
describe('<OrderSummary />', () => {
  let wrapper;
    beforeEach(() => {
        const initialState = {};
        wrapper = setup(initialState);
    });
    it('should render <OrderSummary /> when receiving ingredients and Your Order Heading', () => {
      expect(wrapper.find('h3').text()).toBe('Your Order');
    });
    it('should render <OrderSummary /> when receiving ingredients and Paragraph text', () => {
      expect(wrapper.find('p').at(0).text()).toBe('A delicious burger with the following ingredients:');
    });
    it('should render <OrderSummary /> when receiving ingredients and Price Text', () => {
      expect(wrapper.find('p').at(1).text()).toContain('Total Price');
    });
    it('should render <OrderSummary /> when receiving ingredients and Transition Group Visible', () => {
      expect(wrapper.find(TransitionGroup)).toHaveLength(1);
    });
});