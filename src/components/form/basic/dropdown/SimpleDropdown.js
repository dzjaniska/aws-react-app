import * as React from "react";
import {FormControl, InputLabel, MenuItem, Select} from '@material-ui/core';

export default class SimpleDropdown extends React.Component {
    render() {

        return <div className={"form-field " + (this.props.className || "")}>
            <FormControl variant="outlined" className={"dropdown"} style={this.props.style}>
                <InputLabel>{this.props.label}</InputLabel>
                <Select
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    label={this.props.label}
                >{this.props.options.map(o => {
                        return <MenuItem key={o.value} value={o.value}>{o.label}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </div>
    }
}