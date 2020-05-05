import React, {useEffect} from "react";
import Table from "../../../components/table/Grid";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getRdvList, selectRdv} from "../../../redux/rdv/RdvActions";

const RdvList = ({actions, rdvs}) => {
    const columns = [
        {
            label: 'Center name',
            name: 'center.name'
        },
        {
            label: 'Date',
            name: 'date',
        },
        {
            label: 'Last name',
            name: 'patient.lastName'
        },
        {
            label: 'First name',
            name: 'patient.firstName'
        },
        {
            label: 'Matricule',
            name: 'patient.matricule'
        },
        {
            label: 'Status',
            name: 'status',
            render: value => value?.toUpperCase() ?? "No status"
        }
    ];

    useEffect(() => {
        actions.getRdvList({});
    }, [actions]);

    return <Table columns={columns}
                  data={rdvs.toJS()}
                  pagination={{page: 0, size: 10}}/>
};

function stateToProps(state) {
    return {
        rdvs: state.rdv.rdvs
    }
}

function dispatchToProps(dispatch) {
    return {
        actions:
            bindActionCreators({getRdvList, selectRdv}, dispatch)
    }
}

export default connect(stateToProps, dispatchToProps)(RdvList);

