import PropTypes from 'prop-types';

export const CharacterPropType = PropTypes.shape({
  name: PropTypes.string,
  alignment: PropTypes.string,
  occupation: PropTypes.string,
  level: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  abilityScores: PropTypes.shape({
    strength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    agility: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    stamina: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    personality: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    intelligence: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    luck: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
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
