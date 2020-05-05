import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

import profile from './profile/ProfileReducer'
import rdv from './rdv/RdvReducer'

const rootReducer = combineReducers({
    profile,
    rdv,
    form: formReducer
});

export default rootReducer;

