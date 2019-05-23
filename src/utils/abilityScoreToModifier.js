export const abilityScoreToModifier = (score) => {
  switch (score) {
    case score >= 18:
      return 3;
    case score >= 16:
      return 2;
    case score >= 12:
      return 1;
    case score >= 9:
      return 0;
    case score >= 6:
      return -1;
    case score >= 4:
      return -2;
    case score <= 3:
      return -3;
    default:
      return 0;
  }
};
