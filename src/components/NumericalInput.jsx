import React from 'react';

const NumericalInput = ({value, name, className, onChangeHandler}) => {

  const filterInput = (event) => {
    if (event && (event.target.value.split('').some(char => !(char.charCodeAt(0) < 48 || char.charCodeAt(0) > 57)) || event.target.value === '')) {
      onChangeHandler(event);
    }
  };

  return (
    <input
      name={name}
      className={className}
      value={value}
      onChange={(event) => filterInput(event)}
    />
  );
};

export default NumericalInput;
