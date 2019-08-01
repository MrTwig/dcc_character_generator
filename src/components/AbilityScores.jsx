import React from 'react';
import PropTypes from 'prop-types';

import NumericalInput from "./NumericalInput";
import {CharacterPropType} from "../utils/characterPropType";
import {updateAbilityScores} from "../utils/updateCharacter";

const AbilityScores = ({character, setCharacter}) => {
  const handleChange = (event) => updateAbilityScores(event, character, setCharacter);

	return (
	  <React.Fragment>
      <div className="AbilityScores">
        <NumericalInput
          className="AbilityScores-score"
          labelValue="Strength: "
          inputName="strength"
          inputValue={character.abilityScores.strength}
          onChange={handleChange}
        />
      </div>
      <div className="AbilityScores">
        <NumericalInput
          className="AbilityScores-score"
          labelValue="Agility: "
          inputName="agility"
          inputValue={character.abilityScores.agility}
          onChange={handleChange}
        />
      </div>
      <div className="AbilityScores">
        <NumericalInput
          className="AbilityScores-score"
          labelValue="Stamina: "
          inputName="stamina"
          inputValue={character.abilityScores.stamina}
          onChange={handleChange}
        />
      </div>
      <div className="AbilityScores">
        <NumericalInput
          className="AbilityScores-score"
          labelValue="Personality: "
          inputName="personality"
          inputValue={character.abilityScores.personality}
          onChange={handleChange}
        />
      </div>
      <div className="AbilityScores">
        <NumericalInput
          className="AbilityScores-score"
          labelValue="Intelligence: "
          inputName="intelligence"
          inputValue={character.abilityScores.intelligence}
          onChange={handleChange}
        />
      </div>
      <div className="AbilityScores">
        <NumericalInput
          className="AbilityScores-score"
          labelValue="Luck: "
          inputName="luck"
          inputValue={character.abilityScores.luck}
          onChange={handleChange}
        />
      </div>
    </React.Fragment>
  )
};

AbilityScores.propTypes = {
  character: CharacterPropType,
  setCharacter: PropTypes.func
};

export default AbilityScores;

