export const getAgeGroup = (age: number): 'young' | 'middle' | 'teen' => {
  if (age <= 8) return 'young';
  if (age <= 11) return 'middle';
  return 'teen';
};

export const getInsightText = (age: number, challenges: string[], values: string[]) => {
  const ageGroup = getAgeGroup(age);
  const mainValue = values[0] || 'strong character';
  const mainChallenge = challenges[0] || 'current challenges';

  const templates = {
    young: {
      intro: `At ${age} years old, children are like sponges – they're just starting to form their understanding of the world and their place in it.`,
      challenge: `It's completely normal to face issues like ${mainChallenge.replace('_', ' ')} at this stage. They are testing boundaries to understand rules.`,
      value: `You mentioned wanting to nurture ${mainValue}. This is the perfect age to plant these seeds!`,
      conclusion: `Without guidance, small habits can stick. But with the right stories and role models, ${age} is the magical age to build a foundation of ${mainValue} that lasts a lifetime.`
    },
    middle: {
      intro: `At ${age}, your child is developing their own identity and starting to look outside the home for role models.`,
      challenge: `Struggling with ${mainChallenge.replace('_', ' ')} is common as they navigate more complex social situations and increased independence.`,
      value: `Focusing on ${mainValue} now is crucial. They are seeking to understand "why" they should behave a certain way, not just "how".`,
      conclusion: `This is a pivotal window. By connecting ${mainValue} to their daily life through engaging stories, you can turn these challenges into opportunities for growth.`
    },
    teen: {
      intro: `At ${age}, your child is transitioning into young adulthood. They are critically thinking about their values and faith.`,
      challenge: `Dealing with ${mainChallenge.replace('_', ' ')} can be tough as peer influence grows stronger.`,
      value: `Your desire to instill ${mainValue} shows you want them to have a strong moral compass as they navigate the wider world.`,
      conclusion: `It's not too late. In fact, ${age}-year-olds crave respect and relevance. When they see Islamic values like ${mainValue} presented in a way that respects their intellect, they embrace them.`
    }
  };

  return templates[ageGroup];
};
