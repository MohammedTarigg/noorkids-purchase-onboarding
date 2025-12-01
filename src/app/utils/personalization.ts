export const getAgeGroup = (age: number): 'young' | 'middle' | 'teen' => {
  if (age <= 8) return 'young';
  if (age <= 11) return 'middle';
  return 'teen';
};

export const getInsightText = (age: number, challenges: string[], values: string[]) => {
  const ageGroup = getAgeGroup(age);
  const mainValue = values[0] || 'strong character';
  const mainChallenge = challenges[0] ? challenges[0].replace('_', ' ').toLowerCase() : 'current challenges';

  const templates = {
    young: {
      sentence1: `At ${age} years old, it's understandable you're concerned about ${mainChallenge}.`,
      sentence2: `You mentioned wanting to nurture ${mainValue} – this is the perfect age to build these values with the right approach.`
    },
    middle: {
      sentence1: `At ${age}, it's understandable you're concerned about ${mainChallenge}.`,
      sentence2: `You mentioned wanting to nurture ${mainValue} – this is a pivotal window to shape your child's character.`
    },
    teen: {
      sentence1: `At ${age}, it's understandable you're concerned about ${mainChallenge}.`,
      sentence2: `You mentioned wanting to nurture ${mainValue} – it's not too late, and ${age}-year-olds respond well when values are presented in a way that respects their growing independence.`
    }
  };

  return templates[ageGroup];
};
