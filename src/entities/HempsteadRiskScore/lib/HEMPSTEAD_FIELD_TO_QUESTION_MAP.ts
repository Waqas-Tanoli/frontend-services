import { HempsteadRiskScoreCreate } from '../domain/HempsteadRiskScoreCreate';

export const HEMPSTEAD_FIELD_TO_QUESTION_MAP = {
  age_range: "What's Your Age Range?",
  highest_education_level: 'What is your highest level of education completed?',
  credit_score: 'What is your current credit score range?',
  gross_monthly_income: 'What is your current gross (before taxes)?',
  employment_status: 'What is your current employment status?',
  rent_percentage_of_income:
    'What percentage of your monthly income goes toward rent? (estimate is fine)',
  missed_rent_payments_in_last_24_months:
    'Have you missed any rent payments in the last 24 months?',
  lived_at_current_address: 'How long have you lived at your current address?',
  emergency_funds:
    'How much access to emergency funds do you currently have (cash savings or available credit line)?',
} as const satisfies Record<keyof HempsteadRiskScoreCreate, string>;
