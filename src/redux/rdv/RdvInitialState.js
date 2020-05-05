import {List, Record} from 'immutable'

const RdvInitialState = Record({
    rdvs: List([]),
    rdv: Record({
        rdvId: "",
        voucherID: "",
        status: "",
        date: "",
        time: "",
        patient: {
            patientId: "",
            firstName: "",
            lastName: "",
            maidenName: "",
            matricule: "",
            email: "",
            phone: "",
            address: {
                country: "",
                city: "",
                street: "",
                number: "",
                zip: ""
            },
        },
        center: {
            centerID: "",
            city: "",
            address: "",
            type: "",
            name: ""
        }
    })
});

export default RdvInitialState;
