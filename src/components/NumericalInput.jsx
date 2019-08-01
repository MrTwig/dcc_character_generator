import React from 'react';
import {filterInputToOnlyNumbers} from "../utils/FilterInput";
import StringInput from "./StringInput";
import PropTypes from "prop-types";

const NumericalInput = ({className, labelValue, inputName, inputValue, onChange}) => {
  return (
    <StringInput
      className={className}
      labelValue={labelValue}
      inputName={inputName}
      inputValue={inputValue.toString()}
      onChange={(event) => filterInputToOnlyNumbers(event, onChange)}
    />
  );
};

NumericalInput.propTypes = {
  classname: PropTypes.string,
  inputName: PropTypes.string,
  labelValue: PropTypes.string,
  inputValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func
};

export default NumericalInput;
