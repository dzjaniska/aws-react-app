import ActionTypes from '../actionTypes'
import InitialState from './ProfileInitialState';

const {
    LOGIN,
    LOGOUT
} = ActionTypes;

const initialState = new InitialState();

export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            const profile = action.payload.profile;
            return state.setIn(['first_name'], profile.firstName)
                .setIn(['last_name'], profile.lastName)
                .setIn(['signedIn'], true);
        case LOGOUT:
            return new InitialState();
        default:
            return state;
    }
}
