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
      sentence1: `At ${age} years old, you're concerned about ${mainChallenge}.`,
      sentence2: `You want to build ${mainValue} – this is a great age to start.`
    },
    middle: {
      sentence1: `At ${age}, you're concerned about ${mainChallenge}.`,
      sentence2: `You want to build ${mainValue} – this is an important time to help your child grow.`
    },
    teen: {
      sentence1: `At ${age}, you're concerned about ${mainChallenge}.`,
      sentence2: `You want to build ${mainValue} – it's not too late, and teens respond well when given the right support.`
    }
  };

  return templates[ageGroup];
};
