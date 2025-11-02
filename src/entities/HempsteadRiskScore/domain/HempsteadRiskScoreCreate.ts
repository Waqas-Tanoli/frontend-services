import { z } from 'zod';

import { HempsteadCreditScore } from './constants/HempsteadCreditScore';
import { HempsteadEducationLevel } from './constants/HempsteadEducationLevel';
import { HempsteadEmergencyFunds } from './constants/HempsteadEmergencyFunds';
import { HempsteadEmploymentStatus } from './constants/HempsteadEmploymentStatus';
import { HempsteadLivedAtCurrentAddress } from './constants/HempsteadLivedAtCurrentAddress';
import { HempsteadMissedRentPayments } from './constants/HempsteadMissedRentPayments';
import { HempsteadMonthlyIncome } from './constants/HempsteadMonthlyIncome';
import { HempsteadRentSpending } from './constants/HempsteadRentSpending';
import { HempsteadRiskScoreAgeRange } from './constants/HempsteadRiskScoreAgeRange';
import { HempsteadRiskScore } from './HempsteadRiskScore';

export const hempsteadRiskScoreCreateSchema = z.object({
  age_range: z.nativeEnum(HempsteadRiskScoreAgeRange),
  highest_education_level: z.nativeEnum(HempsteadEducationLevel),
  credit_score: z.nativeEnum(HempsteadCreditScore),
  gross_monthly_income: z.nativeEnum(HempsteadMonthlyIncome),
  employment_status: z.nativeEnum(HempsteadEmploymentStatus),
  rent_percentage_of_income: z.nativeEnum(HempsteadRentSpending),
  missed_rent_payments_in_last_24_months: z.nativeEnum(
    HempsteadMissedRentPayments,
  ),
  lived_at_current_address: z.nativeEnum(HempsteadLivedAtCurrentAddress),
  emergency_funds: z.nativeEnum(HempsteadEmergencyFunds),
}) satisfies z.ZodType<
  Omit<HempsteadRiskScore, 'id' | 'created_at' | 'risk_score'>
>;

export type HempsteadRiskScoreCreate = z.infer<
  typeof hempsteadRiskScoreCreateSchema
>;
