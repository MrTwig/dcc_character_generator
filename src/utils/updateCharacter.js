export const updateCharacter = (event, character, setCharacter) => {
  setCharacter({...character, [event.target.name]: event.target.value});
};


export const updateAbilityScores = (event, character, setCharacter) => {
  setCharacter({...character, abilityScores: {...character.abilityScores, [event.target.name]: event.target.value}})
};
