import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Auth  from './Auth';
import { storeFactory } from '../../../test/testUtils';
import Button from '../../components/UI/Button/Button';

configure({adapter: new Adapter()});

const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Auth store={store} />).dive();
    return wrapper;
}
describe('<Auth />', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = setup();
    });
    test('Auth renders with Switch to Sign In and Submit Button', () => {
        expect(wrapper.find('button').length).toEqual(2);
    });
    test('Auth renders with Switch to Sign In Text check', () => {
        expect(wrapper.find(Button).at(1).render().text()).toBe('SWITCH TO SIGNIN');
    });
    
});


describe('<Auth />', () => {
    let wrapper;
    let mockFunc;

    beforeEach(() => {
        mockFunc  = jest.fn();
        wrapper = setup();
        let submit = wrapper.find(Button).at(1);
        submit.simulate('click',mockFunc);
        console.log(submit.debug());
    });
    
    test('Auth renders with Switch to Sign Up', () => {

        // expect(wrapper.state('currentGuess')).toBe('');
        console.log(wrapper.state('isSignup'));
        console.log(wrapper.find(Button).at(1));

        // wrapper.setProps({ isSignup :false });
        // console.log(wrapper.debug());
        // expect(wrapper.find(Button).at(1).render().text()).toBe('SWITCH TO SIGNUP');
    });
});