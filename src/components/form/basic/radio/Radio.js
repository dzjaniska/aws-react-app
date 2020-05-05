import React from 'react';
import {Field} from "redux-form";
import {RadioGroup} from '@material-ui/core';
import PropTypes from "prop-types";
import {required} from "../validation";

const radioGroup = (field) => {
    const {children, input, label, name, row, meta: {touched, error}} = field;
    const invalid = !!(touched && !!error);
    return <div className={"form-field text-field"}>
        <RadioGroup
                {...input}
                label={label}
                name={name}
                row={row}
                variant="outlined"
        >
            {children}
        </RadioGroup>
        {invalid && <span className={"error-message"}>{error}</span>}
    </div>;
};

const Radio = (props) => <Field {...props} validate={props.required ? required : undefined} component={radioGroup}/>;

export default Radio;

Radio.propTypes = {
    label: PropTypes.any,
    name: PropTypes.string,
    required: PropTypes.bool,
    row: PropTypes.bool
};