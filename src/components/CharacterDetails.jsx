import React from 'react';
import PropTypes from 'prop-types';

import {CharacterPropType} from '../utils/characterPropType';
import {updateCharacter} from "../utils/updateCharacter";
import NumericalInput from "./NumericalInput";
import StringInput from "./StringInput";

const CharacterDetails = ({character, setCharacter}) => {
  const handleChange = (event) => updateCharacter(event, character, setCharacter);

  return (<div className="CharacterDetails">
    <StringInput
      className="CharacterDetails-name"
      labelValue="Name: "
      inputName="name"
      inputValue={character.name}
      onChange={handleChange}
    />
    <StringInput
      className="CharacterDetails-alignment"
      labelValue="Alignment: "
      inputName="alignment"
      inputValue={character.alignment}
      onChange={handleChange}
    />
    <StringInput
      className="CharacterDetails-occupation"
      labelValue="Occupation: "
      inputName="occupation"
      inputValue={character.occupation}
      onChange={handleChange}
    />
    <NumericalInput
      className="CharacterDetails-level"
      labelValue="Level: "
      inputName="level"
      inputValue={character.level}
      onChange={handleChange}
    />
  </div>);
};

CharacterDetails.propTypes = {
  character: CharacterPropType,
  setCharacter: PropTypes.func
};

export default CharacterDetails;
