export const getAgeGroup = (age: number): 'young' | 'middle' | 'teen' => {
  if (age <= 8) return 'young';
  if (age <= 11) return 'middle';
  return 'teen';
};

// Map challenge IDs to readable labels
const mapChallengeId = (challengeId: string): string => {
  const challengeMap: Record<string, string> = {
    'not_listening_disrespect': 'disrespect',
    'lying_hiding_truth': 'lying',
    'screen_time_faith': 'screen time distractions',
    'low_confidence_identity': 'low confidence',
    'character_manners': 'character and manners',
  };
  return challengeMap[challengeId] || challengeId.replace(/_/g, ' ').toLowerCase();
};

// Map frequency IDs to readable text
const mapFrequencyId = (frequencyId: string): string => {
  const frequencyMap: Record<string, string> = {
    'almost-daily': 'almost every day',
    'few-times-week': 'a few times a week',
    'few-times-month': 'a few times a month',
    'rarely': 'rarely',
  };
  return frequencyMap[frequencyId] || frequencyId.replace(/-/g, ' ');
};

// Map value IDs to readable labels
const mapValueId = (valueId: string): string => {
  const valueMap: Record<string, string> = {
    'strong_faith_allah': 'faith and love of Allah',
    'confidence_resilience': 'confidence and resilience',
    'compassion_empathy': 'kindness',
    'self_discipline_habits': 'discipline',
    'gratitude_attitude': 'gratitude',
  };
  return valueMap[valueId] || valueId.replace(/_/g, ' ').toLowerCase();
};

export interface InsightSections {
  section1: string;
  section2: string;
  section3: string;
  section4: string;
}

export const getInsightText = (
  age: number,
  challenges: string[],
  values: string[],
  frequency?: string
): InsightSections => {
  const mainChallenge = challenges[0] ? mapChallengeId(challenges[0]) : 'current challenges';
  const mainValue = values[0] ? mapValueId(values[0]) : 'strong character';
  const frequencyText = frequency ? mapFrequencyId(frequency) : 'regularly';

  // Section 1: Based on what you shared, age [X]…
  const section1 = `Based on what you shared, age ${age}…`;

  // Section 2: It's totally normal for kids this age to test boundaries...
  const section2 = `It's totally normal for kids this age to test boundaries — but these are exactly the years when character habits are formed.`;

  // Section 3: You indicated concerns about [challenge] happening [frequency]...
  const section3 = `You indicated concerns about ${mainChallenge} happening ${frequencyText}. At this stage, early guidance makes a lifelong difference.`;

  // Section 4: You want to nurture values like [value]. These are perfect to build RIGHT NOW at age [X].
  const section4 = `You want to nurture values like ${mainValue}. These are perfect to build RIGHT NOW at age ${age}.`;

  return {
    section1,
    section2,
    section3,
    section4,
  };
};
