import React from 'react';
import PropTypes from 'prop-types';
import {CharacterPropType} from '../utils/characterPropType';
import {updateCharacter} from "../utils/updateCharacter";
import NumericalInput from "./NumericalInput";

const CharacterDetails = ({character, setCharacter}) =>
  <div className="CharacterDetails">
    <div className="CharacterDetails-name">
      <label className="CharacterDetails-name-label">Name: </label>
      <input
        name="name"
        type="text"
        className="CharacterDetails-name-input"
        value={character.name}
        onChange={(event) => updateCharacter(event)(character, setCharacter)}
      />
    </div>
    <div className="CharacterDetails-alignment">
      <label className="CharacterDetails-alignment-label">Alignment: </label>
      <input
        name="alignment"
        type="text"
        className="CharacterDetails-alignment-input"
        value={character.alignment}
        onChange={(event) => updateCharacter(event)(character, setCharacter)}
      />
    </div>
    <div className="CharacterDetails-occupation">
      <label className="CharacterDetails-occupation-label">Occupation: </label>
      <input
        name="occupation"
        type="text"
        className="CharacterDetails-occupation-input"
        value={character.occupation}
        onChange={(event) => updateCharacter(event)(character, setCharacter)}
      />
    </div>
    <div className="CharacterDetails-level">
      <label className="CharacterDetails-level-label">Level: </label>
      <NumericalInput
        name="level"
        className="CharacterDetails-level-input"
        value={character.level}
        onChangeHandler={(event) => updateCharacter(event)(character, setCharacter)}
      />
    </div>
  </div>;

CharacterDetails.propTypes = {
  character: CharacterPropType,
  setCharacter: PropTypes.func
};

export default CharacterDetails;
