import {INCREMENT_SUCCESS, DECREMENT_SUCCESS} from '../actionTypes/index'

const counterInitialState = {
    count:0
}
export const counter = (state = counterInitialState, {type, payload}) => {
    switch (type) {
        case 'INCREMENT_SUCCESS':
            return {
                ...state,
                count:state.count+1
            }
        case 'DECREMENT_SUCCESS':
            return {
                ...state,
                count:state.count-1
            }
        default:
            return state
    }
}