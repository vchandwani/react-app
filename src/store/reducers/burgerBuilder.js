import * as actionTypes from '../actions/actionTypes';
import {updatedObject} from '../utility';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error:false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};
const addIngredient =(state,action) =>{
    const updateIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1};
    const updateIngredients = updatedObject(state.ingredients,updateIngredient);
    const updateState = {
        ingredients : updateIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
    }
    return updatedObject(state,updateState);
}
const removeIngredient =(state,action)=>{
    const updateIng = {[action.ingredientName]: state.ingredients[action.ingredientName] - 1};
    const updateIngs = updatedObject(state.ingredients,updateIng);
    const updateSt = {
        ingredients : updateIngs,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
    }
    return updatedObject(state,updateSt);
}
const setIngredient =(state,action)=>{
    return updatedObject(state,{
        ingredients: {
            salad : action.ingredients.salad,
            meat : action.ingredients.meat,
            cheese : action.ingredients.cheese,
            bacon : action.ingredients.bacon
        },
        totalPrice : 4,
        error:false
    } );
}
const fetchIngredientFailed= (state,action) => {
    return updatedObject(state,{error:true});
}
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_INGREDIENT: return addIngredient(state,action)
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state,action);
        case actionTypes.SET_INGREDIENT: return setIngredient(state,action);
        case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientFailed(state,action);
        default: return state;
    }
};

export default reducer;