import React from 'react';

import '../styles/CharacterSheet.scss';
import CharacterCard from "./CharacterCard";

const CharacterSheet = () =>
  <div className="CharacterSheet">
    <h1 className="CharacterSheet-title" >DCC 0-Level Character Generator</h1>
    <div className="CharacterSheet-content">
      <div className="CharacterSheet-content-character">
        <CharacterCard/>
      </div>
      <div className="CharacterSheet-content-controls">

      </div>
    </div>
  </div>;

export default CharacterSheet;
