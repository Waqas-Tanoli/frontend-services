import { HempsteadCreditScore } from '../domain/constants/HempsteadCreditScore';
import { HempsteadEducationLevel } from '../domain/constants/HempsteadEducationLevel';
import { HempsteadEmergencyFunds } from '../domain/constants/HempsteadEmergencyFunds';
import { HempsteadEmploymentStatus } from '../domain/constants/HempsteadEmploymentStatus';
import { HempsteadLivedAtCurrentAddress } from '../domain/constants/HempsteadLivedAtCurrentAddress';
import { HempsteadMissedRentPayments } from '../domain/constants/HempsteadMissedRentPayments';
import { HempsteadMonthlyIncome } from '../domain/constants/HempsteadMonthlyIncome';
import { HempsteadRentSpending } from '../domain/constants/HempsteadRentSpending';
import { HempsteadRiskScoreAgeRange } from '../domain/constants/HempsteadRiskScoreAgeRange';
import { HempsteadRiskScoreCreate } from '../domain/HempsteadRiskScoreCreate';

export const HEMPSTEAD_FIELD_TO_CHOICES_MAP = {
  age_range: Object.values(HempsteadRiskScoreAgeRange),
  highest_education_level: Object.values(HempsteadEducationLevel),
  credit_score: Object.values(HempsteadCreditScore),
  gross_monthly_income: Object.values(HempsteadMonthlyIncome),
  employment_status: Object.values(HempsteadEmploymentStatus),
  rent_percentage_of_income: Object.values(HempsteadRentSpending),
  missed_rent_payments_in_last_24_months: Object.values(
    HempsteadMissedRentPayments,
  ),
  lived_at_current_address: Object.values(HempsteadLivedAtCurrentAddress),
  emergency_funds: Object.values(HempsteadEmergencyFunds),
} as const satisfies Record<keyof HempsteadRiskScoreCreate, unknown[]>;
