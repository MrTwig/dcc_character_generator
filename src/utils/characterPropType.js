import PropTypes from 'prop-types';

export const CharacterPropType = PropTypes.shape({
  name: PropTypes.string,
  alignment: PropTypes.string,
  occupation: PropTypes.string,
  level: PropTypes.number,
  abilityScores: PropTypes.shape({
    strength: PropTypes.number,
    agility: PropTypes.number,
    stamina: PropTypes.number,
    personality: PropTypes.number,
    intelligence: PropTypes.number,
    luck: PropTypes.number
  }),
  savingThrows: PropTypes.shape({
    reflex: PropTypes.number,
    fortitude: PropTypes.number,
    will: PropTypes.number
  }),
  hitPoints: PropTypes.number,
  armourClass: PropTypes.number,
  experiencePoints: PropTypes.number,
  luckySign: PropTypes.string,
  weaponry: PropTypes.array,
  equipment: PropTypes.array
});
