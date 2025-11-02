import { HempsteadCreditScore } from './constants/HempsteadCreditScore';
import { HempsteadEducationLevel } from './constants/HempsteadEducationLevel';
import { HempsteadEmergencyFunds } from './constants/HempsteadEmergencyFunds';
import { HempsteadEmploymentStatus } from './constants/HempsteadEmploymentStatus';
import { HempsteadLivedAtCurrentAddress } from './constants/HempsteadLivedAtCurrentAddress';
import { HempsteadMissedRentPayments } from './constants/HempsteadMissedRentPayments';
import { HempsteadMonthlyIncome } from './constants/HempsteadMonthlyIncome';
import { HempsteadRentSpending } from './constants/HempsteadRentSpending';
import { HempsteadRiskScoreAgeRange } from './constants/HempsteadRiskScoreAgeRange';

export interface HempsteadRiskScore {
  id: string;
  created_at: string;
  age_range: HempsteadRiskScoreAgeRange;
  highest_education_level: HempsteadEducationLevel;
  credit_score: HempsteadCreditScore;
  gross_monthly_income: HempsteadMonthlyIncome;
  employment_status: HempsteadEmploymentStatus;
  rent_percentage_of_income: HempsteadRentSpending;
  missed_rent_payments_in_last_24_months: HempsteadMissedRentPayments;
  lived_at_current_address: HempsteadLivedAtCurrentAddress;
  emergency_funds: HempsteadEmergencyFunds;
  risk_score: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}
