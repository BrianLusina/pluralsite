import React from 'react';
import PropTypes from 'prop-types';

/**
 * SelectInput stateless component
 */
const SelectInput = ({ name, label, value, defaultOption, options, onChange, error }) => {
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <div className="field">
          {/*Value is set here rather than in option - docs https://facebook.github*/}
          <select
            name={name}
            value={value}
            onChange={onChange}
            className="form-control">
            <option value="">{defaultOption}</option>
            {
              options.map((option) => {
                return <option key={option.value} value={option.value}>{option.text}</option>;
              })
            }
          </select>
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
      </div>
    );
};

/**
 * Prop validation
 */
SelectInput.propTypes = {
  name:PropTypes.string.isRequired,
  label:PropTypes.string.isRequired,
  value:PropTypes.number,
  defaultOption:PropTypes.string,
  options:PropTypes.arrayOf(PropTypes.object),
  onChange:PropTypes.func.isRequired,
  error:PropTypes.string
};

export default SelectInput;
