import { useState } from 'react';
import { toast } from 'sonner';

import * as hempsteadRiskScoreService from './HempsteadRiskScore.service';
import { HempsteadRiskScoreCreate } from '../domain/HempsteadRiskScoreCreate';

export function useHempstedRiskScoreCreate() {
  const [isLoading, setIsLoading] = useState(false);

  const createHempsteadRiskScore = async (
    answers: HempsteadRiskScoreCreate,
  ) => {
    try {
      setIsLoading(true);

      const newHempstedRiskScore =
        await hempsteadRiskScoreService.createHempsteadRiskScore(answers);

      return newHempstedRiskScore;
    } catch {
      toast.error('Ooops!', {
        description: 'Some error happend, while calculating the risk score',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    createHempsteadRiskScore,
  } as const;
}
