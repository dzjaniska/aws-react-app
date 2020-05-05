import React from 'react';
import {Field} from "redux-form";
import "./DatePicker.scss"
import PropTypes from "prop-types";
import {KeyboardDatePicker} from '@material-ui/pickers';
import moment from "moment";
import {required} from "../validation";
import {joinListeners} from "../FormComponentUtils";

const datePicker = (field) => {
    const {name, label, disabled, disableFuture, listeners, meta: {touched, error}} = field;
    let input = {
        value: field.input.value,
        onChange: field.input.onChange
    };
    const onDateChange = value => input.onChange(moment(value).isValid() ? moment(value).format("YYYY-MM-DD") : value);
    const invalid = !!(touched && error);
    if(listeners) {
        input = joinListeners(input, listeners, field)
    }
    return <div className={"form-field date-picker " + (invalid ? "Mui-error" : "")}>
        <KeyboardDatePicker
                {...input}
                disabled={disabled}
                autoOk
                disableFuture={disableFuture}
                format="DD/MM/YYYY"
                fullWidth
                inputVariant="outlined"
                name={name}
                label={label}
                onChange={onDateChange}
                value={input.value ? input.value : null}
                variant="inline"
        />
        {invalid && <span className={"error-message"}>{error}</span>}
    </div>
};

const DatePicker = (props) =>
        <Field {...props}
               validate={props.required ? required : undefined}
               component={datePicker}/>;

export default DatePicker;

DatePicker.propTypes = {
    disabled: PropTypes.bool,
    disableFuture: PropTypes.bool,
    name: PropTypes.string,
    label: PropTypes.any,
    required: PropTypes.bool
};