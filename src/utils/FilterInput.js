export const filterInputToOnlyNumbers = (event, onChange) => {
  if (event && (event.target.value.split('').every(char => !(char.charCodeAt(0) < 48 || char.charCodeAt(0) > 57)) || event.target.value === '')) {
    onChange(event);
  }
};