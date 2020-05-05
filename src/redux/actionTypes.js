import keyMirror from 'key-mirror';

const createActionBundle = (actionName) => {
    return {
        [actionName]: {
            REQUEST: `${actionName}`,
            PENDING: `${actionName}_PENDING`,
            FULFILLED: `${actionName}_FULFILLED`,
            REJECTED: `${actionName}_REJECTED`
        }
    }
};

const ACTION_TYPES = {

    ...createActionBundle("GET_RDV_LIST"),

    ...keyMirror({
        SELECT_RDV: null,

        LOGIN: null,
        LOGOUT: null,
    })

};

export default ACTION_TYPES;
