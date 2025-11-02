import { HempsteadRiskScore } from '../domain/HempsteadRiskScore';
import { HempsteadRiskScoreCreate } from '../domain/HempsteadRiskScoreCreate';

export const createHempsteadRiskScore = async (
  answers: HempsteadRiskScoreCreate,
): Promise<HempsteadRiskScore> => {
  try {
    const response = await fetch('/api/hempstead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(answers),
    });

    return await response.json();
  } catch (error) {
    throw error;
  }
};
