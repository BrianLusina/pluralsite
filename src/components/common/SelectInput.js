import React from 'react';
import PropTypes from 'prop-types';

/**
 * SelectInput stateless component
 */
const SelectInput = ({ name, label, value, defaultOption, options, onChange, error }) => {
    return (
        <div>
        </div>
    );
};

/**
 * Prop validation
 */
SelectInput.propTypes = {
  name:PropTypes.string.isRequired,
  label:PropTypes.string.isRequired,
  value:PropTypes.number.isRequired,
  defaultOption:PropTypes.string.isRequired,
  options:PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
  error:PropTypes.string.isRequired
};

export default SelectInput;
