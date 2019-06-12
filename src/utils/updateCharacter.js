export const updateCharacter = (event, character, setCharacter) => {
  setCharacter({...character, [event.target.name]: event.target.value});
};
