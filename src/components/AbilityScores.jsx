import React from 'react';
import PropTypes from 'prop-types';

import NumericalInput from "./NumericalInput";
import {CharacterPropType} from "../utils/characterPropType";
import {updateCharacter} from "../utils/updateCharacter";

const AbilityScores = ({character, setCharacter}) => {
  const handleChange = (event) => updateCharacter(event, character, setCharacter);

	return (<div className="AbilityScores">
    <NumericalInput
      className="AbilityScores-score"
      labelValue="Strength: "
      inputName="strength"
      inputValue={character.abilityScores.strength}
      onChange={handleChange} />
	</div>)
};

AbilityScores.propTypes = {
  character: CharacterPropType,
  setCharacter: PropTypes.func
};

export default AbilityScores;

