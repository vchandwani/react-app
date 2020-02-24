import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { BurgerBuilder } from './BurgerBuilder';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import { storeFactory } from '../../../test/testUtils';

configure({adapter: new Adapter()});

const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}} store={store} />);
    return wrapper;
}
describe('<BurgerBuilder />', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = setup();
    });

    it('should render <BuildControls /> when receiving ingredients', () => {
        wrapper.setProps({ings: {salad: 0}});
        expect(wrapper.find(BuildControls)).toHaveLength(1);
    });
    it('should render <Burger /> when receiving ingredients', () => {
        wrapper.setProps({ings: {salad: 1}});
        expect(wrapper.find(Burger)).toHaveLength(1);
    });
});