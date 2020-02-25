import React from 'react';
import {storeFactory } from '../test/testUtils';
import {purchaseBurgerStart,purchaseInit, fetchOrders} from './store/actions/index';


describe('burgerBuilder action dispatcher', ()=> {
    
    describe('Burger Builder start process', ()=> {
        let store;
        const initialState = {};
        beforeEach(()=>{
          store = storeFactory(initialState);
        });
        test('updated state correctly for burger start', ()=>{
            store.dispatch(purchaseBurgerStart());
            const newState = store.getState();
            const expectedState = {
              ...initialState,
                burgerBuilder: { ingredients: null, totalPrice: 4, error: false, building: false },
                order: { orders: [], loading: true, purchased: false },
                auth: {
                    token: null,
                    userId: null,
                    error: null,
                    loading: false,
                    authRedirectPath: '/'
                }
            }
            expect(newState).toEqual(expectedState);
          });
        test('purchase init state check', ()=>{
            store.dispatch(purchaseInit());
            const newState = store.getState();
            const expectedState = {
              ...initialState,
              burgerBuilder: { ingredients: null, totalPrice: 4, error: false, building: false },
              order: { orders: [], loading: false, purchased: false },
              auth: {
                token: null,
                userId: null,
                error: null,
                loading: false,
                authRedirectPath: '/'
              }
            }
            expect(newState).toEqual(expectedState);
          });
    });
});

describe('fetchOrder dispatch', ()=> {
    let store;
    const initialState = {};
    beforeEach(()=>{
      store = storeFactory(initialState);
    });
    test('fetch orders response', ()=>{
        store.dispatch(fetchOrders('token','userId'));
        const newState = store.getState();
        console.log(newState);
        // const expectedState = {
        //   ...initialState,
        //     burgerBuilder: { ingredients: null, totalPrice: 4, error: false, building: false },
        //     order: { orders: [], loading: true, purchased: false },
        //     auth: {
        //         token: null,
        //         userId: null,
        //         error: null,
        //         loading: false,
        //         authRedirectPath: '/'
        //     }
        // }
        // expect(newState).toEqual(expectedState);
      });
});