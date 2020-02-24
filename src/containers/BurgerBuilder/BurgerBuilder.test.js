import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { BurgerBuilder } from './BurgerBuilder';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';

configure({adapter: new Adapter()});

describe('<BurgerBuilder />', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}}/>);
    });

    it('should render <BuildControls /> when receiving ingredients', () => {
        wrapper.setProps({ings: {salad: 0}});
        expect(wrapper.find(BuildControls)).toHaveLength(1);
    });
    it('should render <BuildControls /> when receiving ingredients filled and purchasble', () => {
        wrapper.setProps({ings: {salad: 1, meat:1, salad:1}});
        expect(wrapper.find(BuildControls).prop('purchasable')).toBe(true);
    });
    it('should render <Burger /> when receiving ingredients filled', () => {
        wrapper.setProps({ings: {salad: 1, meat:1, salad:1}});
        expect(wrapper.find(Burger)).toHaveLength(1);
    });
});