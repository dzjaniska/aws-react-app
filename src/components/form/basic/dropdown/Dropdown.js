import React from 'react';
import {Field} from "redux-form";
import {Checkbox, Chip, FormControl, InputLabel, MenuItem, Select} from '@material-ui/core';
import PropTypes from "prop-types";
import "./Dropdown.scss"
import {required} from "../validation";
import {joinListeners} from "../FormComponentUtils";

const emptyOption = {label: "", value: ""};

const dropdown = (props) => {
    const {multiple, name, label, options, listeners, readonly, meta: {touched, error}} = props;
    let input = props.input;
    const value = props.value || input.value;
    const selectOptions = multiple ? options : [emptyOption, ...options];
    const invalid = !!(touched && error);
    if(listeners) {
        input = joinListeners(input, listeners, props)
    }
    return <FormControl variant="outlined" className={"dropdown"} error={invalid}>
        <InputLabel>
            {label}
        </InputLabel>
        <Select
                {...input}
                multiple={multiple}
                name={name}
                value={value}
                variant="outlined"
                displayEmpty={true}
                inputProps={{readOnly: readonly}}
                renderValue={selected =>
                        multiple ?
                                selected.map(item => selectOptions.find(option => option.value === item))
                                        .map(option => !!option && <Chip key={option.value} label={option.label}/>)
                                : selectOptions.find(option => option.value === selected)?.label || props.placeholder}
        >
            {selectOptions.map(option =>
                    <MenuItem key={option.value} value={option.value}>
                        {multiple &&
                        <Checkbox checked={value.findIndex(item => item === option.value) > -1}/>}
                        {option.label}
                    </MenuItem>)}
        </Select>
        {invalid && <span className={"error-message"}>{error}</span>}
    </FormControl>
};


const Dropdown = (props) =>
        <div className={"form-field " + (props.className || "")}>
            <Field {...props}
                   validate={props.required ? required : undefined}
                   component={dropdown}/>
        </div>;

export default Dropdown;


Dropdown.propTypes = {
    multiple: PropTypes.bool,
    readonly: PropTypes.bool,
    placeholder: PropTypes.any,
    listeners: PropTypes.object,//used to add onChange, onBlur, etc event listeners who used by reduxForms
    name: PropTypes.string,
    label: PropTypes.any,
    options: PropTypes.array
};