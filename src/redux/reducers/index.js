import {combineReducers} from 'redux';
import {counter} from './counter';

const rootReducer = combineReducers({
    counters:counter
})

export default rootReducer;