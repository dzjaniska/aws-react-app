import ActionTypes from "../actionTypes";
import mockRdvs from "../../mock/mockRdvs";

const {
    GET_RDV_LIST,
    SELECT_RDV
} = ActionTypes;

export function getRdvList(pagination) {
    return {
        type: GET_RDV_LIST.FULFILLED,
        payload: {data: mockRdvs}
        // payload: API.get("restapi", "/items")
    }
}

export function selectRdv(rdv) {
    return {
        type: SELECT_RDV,
        payload: mockRdvs[0]
    }
}
