/**
 * Centralized onboarding step configuration
 * This ensures consistent step numbers and total steps across all pages
 * 
 * Note: Welcome page (/) is step 1 but doesn't show progress bar
 * Total steps = 18 (all pages with progress bar)
 */

export const TOTAL_ONBOARDING_STEPS = 18;

/**
 * Maps route paths to their step numbers
 * Step 1 is the welcome page (no header/progress shown)
 * Steps 2-18 are the onboarding pages with progress bar
 */
export const STEP_ROUTE_MAP: Record<string, number> = {
  '/': 1,
  '/age': 2,
  '/behavior': 3,
  '/challenge-frequency': 4,
  '/family-impact': 5,
  '/values': 6,
  '/parent-priorities': 7,
  '/insights': 8,
  '/personalized-program': 9,
  '/harvard-scholars': 10,
  '/fun': 11,
  '/values-program': 12,
  '/muslim-treehouse': 13,
  '/challenges-program': 14,
  '/social-proof': 15,
  '/start-trial': 16,
  '/transparency': 17,
  '/books-picked': 18,
  '/trial': 18, // Final step - same as books-picked since trial-offer was removed
};

/**
 * Get step number for a given route
 */
export function getStepForRoute(route: string): number {
  return STEP_ROUTE_MAP[route] || 1;
}

/**
 * Get route for a given step number
 */
export function getRouteForStep(step: number): string {
  const entry = Object.entries(STEP_ROUTE_MAP).find(([, stepNum]) => stepNum === step);
  return entry ? entry[0] : '/';
}

