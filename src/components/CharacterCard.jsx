import React, {useState} from 'react';
import CharacterDetails from "./CharacterDetails";
import AbilityScores from "./AbilityScores";

const CharacterCard = () => {
  const base_character = {
    name: '',
    alignment: '',
    occupation: '',
    level: 0,
    abilityScores: {
      strength: 0,
      agility: 0,
      stamina: 0,
      personality: 0,
      intelligence: 0,
      luck: 0
    },
    savingThrows: {
      reflex: 0,
      fortitude: 0,
      will: 0
    },
    hitPoints: 0,
    armourClass: 0,
    experiencePoints: 0,
    luckySign: '',
    weaponry: [],
    equipment: [],
    notes: ''
  };

  const [character, setCharacter] = useState(base_character);

  return (
    <div className="CharacterCard">
      <CharacterDetails character={character} setCharacter={setCharacter}/>
      <AbilityScores character={character} setCharacter={setCharacter}/>
    </div>
  );
};

export default CharacterCard;
