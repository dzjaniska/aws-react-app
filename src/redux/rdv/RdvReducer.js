import ActionTypes from '../actionTypes'
import InitialState from './RdvInitialState';
import {List, Record} from "immutable";

const {
    GET_RDV_LIST,
    SELECT_RDV
} = ActionTypes;

const initialState = new InitialState();

export default function rdvReducer(state = initialState, action) {
    switch (action.type) {
        case GET_RDV_LIST.FULFILLED:
            return state.setIn(['rdvs'], new List(action.payload.data));
        case SELECT_RDV:
            return state.setIn(['rdv'], new Record(action.payload.data));
        default:
            return state;
    }
}
