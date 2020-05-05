import React from 'react';
import {Field} from "redux-form";
import PropTypes from "prop-types";
import NumberFormat from 'react-number-format';
import {required} from "../validation";
import {TextField} from '@material-ui/core';

const mobileInput = (props) => {
  const {autoFocus, disabled, readonly, label, name, meta: {touched, error}} = props;
  let input = props.input;
  const invalid = !!(touched && error);

  return <div className={"form-field text-field"}>
    <NumberFormat
      {...input}
      autoFocus={autoFocus}
      disabled={disabled}
      error={invalid}
      fullWidth
      label={label}
      name={name}
      type={"text"}
      variant="outlined"
      customInput={TextField}
      isNumericString
      allowLeadingZeros
      InputProps={{readOnly: readonly}}
    />
    {invalid && <span className={"error-message"}>{error}</span>}
  </div>;
};

const MobileInput = (props) => {

  const validations = [];
  if (props.required && !props.readonly) validations.push(required);
  return <Field {...props} component={mobileInput} validate={validations}/>;
};

export default MobileInput;

MobileInput.propTypes = {
  label: PropTypes.any,
  readonly: PropTypes.bool,
  name: PropTypes.string,
  required: PropTypes.bool,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
};