import React from 'react';
import App from './App';
import { storeFactory } from '../test/testUtils';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods : true
});

const setup = (state={}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<BrowserRouter><App store={store} /></BrowserRouter>);
  return wrapper;
}
it('renders without crashing', () => {
  const wrapper = setup();
  expect(wrapper).toHaveLength(1);
});
