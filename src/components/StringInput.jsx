import React from 'react';
import PropTypes from 'prop-types';

const StringInput = ({className, inputName, labelValue, inputValue, onChange}) =>
  <div className={className}>
    <label className={`${className}-label`}>{labelValue}</label>
    <input
      name={inputName}
      className={`${className}-input`}
      value={inputValue}
      onChange={onChange}
    />
  </div>;

StringInput.propTypes = {
  classname: PropTypes.string,
  inputName: PropTypes.string,
  labelValue: PropTypes.string,
  inputValue: PropTypes.string,
  onChange: PropTypes.func
};

export default StringInput;