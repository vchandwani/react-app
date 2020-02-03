import { put }  from 'redux-saga/effects';
import * as actions from '../actions/index';
import axios from '../../axios-orders';


//generator function
export function* initIngredientsSaga() {
    try {
        const response  = yield axios.get('https://react-burger-b3f9f.firebaseio.com/ingredients.json')
        yield put(actions.setIngredients(response.data));
    } catch(error) {
        yield put(actions.fetchIngredientsFailed());
    }
}