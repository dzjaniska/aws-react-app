import React from 'react';
import "./TextInput.scss";
import {Field} from "redux-form";
import {TextField} from '@material-ui/core';
import PropTypes from "prop-types";
import {matricule, required} from "../validation";
import {joinListeners} from "../FormComponentUtils";

const textInput = (props) => {
    const {autoFocus, disabled, readonly, label, name, type, meta: {touched, error}, listeners} = props;
    let input = props.input;
    const invalid = !!(touched && error);

    if(listeners) {
        input = joinListeners(input, listeners, props)
    }
    return <div className={"form-field text-field"}>
        <TextField
                {...input}
                autoFocus={autoFocus}
                disabled={disabled}
                error={invalid}
                fullWidth
                label={label}
                name={name}
                type={type ? type : "text"}
                variant="outlined"
                InputProps={{readOnly: readonly}}
        />
        {invalid && <span className={"error-message"}>{error}</span>}
    </div>;
};

const TextInput = (props) => {
    const validations = [];
    if (props.required) validations.push(required);
    if (props.matricule) validations.push(matricule);
    return <Field {...props} component={textInput} validate={validations}/>;
};

export default TextInput;

TextInput.propTypes = {
    autoFocus: PropTypes.bool,
    listeners: PropTypes.object,//used to add onChange, onBlur, etc event listeners who used by reduxForms
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    label: PropTypes.any,
    name: PropTypes.string,
    matricule: PropTypes.bool,
    required: PropTypes.bool,
    type: PropTypes.string
};