import React from 'react'
import Autosuggest from 'react-autosuggest';
import './Autocomplete.scss'
import PropTypes from "prop-types";

export const Autocomplete = props => {
    const {getSuggestionValue, inputProps, onSuggestionsClearRequested, onSuggestionsFetchRequested, renderInputComponent, renderSuggestion, shouldRenderSuggestions, suggestions} = props;

    return (
            <div className={"autocomplete"}>
                <Autosuggest
                        getSuggestionValue={getSuggestionValue}
                        inputProps={inputProps}
                        onSuggestionsClearRequested={onSuggestionsClearRequested}
                        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                        renderInputComponent={renderInputComponent}
                        renderSuggestion={renderSuggestion}
                        shouldRenderSuggestions={shouldRenderSuggestions}
                        suggestions={suggestions}
                />
            </div>
    );
};

Autocomplete.propTypes = {
    getSuggestionValue: PropTypes.func,
    inputProps: PropTypes.object,
    onSuggestionsClearRequested: PropTypes.func,
    onSuggestionsFetchRequested: PropTypes.func,
    renderInputComponent: PropTypes.func,
    renderSuggestion: PropTypes.func,
    shouldRenderSuggestions: PropTypes.func,
    suggestions: PropTypes.array
};