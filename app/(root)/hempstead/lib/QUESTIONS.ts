import { HempsteadRiskScoreCreate } from '@/src/entities/HempsteadRiskScore/domain/HempsteadRiskScoreCreate';
import { HEMPSTEAD_FIELD_TO_CHOICES_MAP } from '@/src/entities/HempsteadRiskScore/lib/HEMPSTEAD_FIELD_TO_CHOICES_MAP';
import { HEMPSTEAD_FIELD_TO_QUESTION_MAP } from '@/src/entities/HempsteadRiskScore/lib/HEMPSTEAD_FIELD_TO_QUESTION_MAP';

class HempsteadRiskScoreQuestion {
  id = Date.now();
  field: keyof HempsteadRiskScoreCreate;
  title: (typeof HEMPSTEAD_FIELD_TO_QUESTION_MAP)[keyof typeof HEMPSTEAD_FIELD_TO_QUESTION_MAP];
  choices: (typeof HEMPSTEAD_FIELD_TO_CHOICES_MAP)[keyof typeof HEMPSTEAD_FIELD_TO_CHOICES_MAP];

  constructor(field: keyof HempsteadRiskScoreCreate) {
    this.field = field;
    this.title = HEMPSTEAD_FIELD_TO_QUESTION_MAP[field];
    this.choices = HEMPSTEAD_FIELD_TO_CHOICES_MAP[field];
  }
}

export const QUESTIONS = [
  new HempsteadRiskScoreQuestion('age_range'),
  new HempsteadRiskScoreQuestion('highest_education_level'),
  new HempsteadRiskScoreQuestion('credit_score'),
  new HempsteadRiskScoreQuestion('gross_monthly_income'),
  new HempsteadRiskScoreQuestion('employment_status'),
  new HempsteadRiskScoreQuestion('rent_percentage_of_income'),
  new HempsteadRiskScoreQuestion('missed_rent_payments_in_last_24_months'),
  new HempsteadRiskScoreQuestion('lived_at_current_address'),
  new HempsteadRiskScoreQuestion('emergency_funds'),
];
