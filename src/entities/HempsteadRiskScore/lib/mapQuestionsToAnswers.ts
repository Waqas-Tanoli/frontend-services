import { HEMPSTEAD_FIELD_TO_QUESTION_MAP } from './HEMPSTEAD_FIELD_TO_QUESTION_MAP';
import { HempsteadRiskScoreCreate } from '../domain/HempsteadRiskScoreCreate';

type Question =
  (typeof HEMPSTEAD_FIELD_TO_QUESTION_MAP)[keyof typeof HEMPSTEAD_FIELD_TO_QUESTION_MAP];
type Answer = HempsteadRiskScoreCreate[keyof HempsteadRiskScoreCreate];

export type QuestionsWithAnswers = Record<Question, Answer>;

export const mapQuestionsToAnswers = (
  answers: HempsteadRiskScoreCreate,
): QuestionsWithAnswers => {
  const questionsWithAnswers = {} as QuestionsWithAnswers;

  Object.entries(answers).forEach(([field, answer]) => {
    questionsWithAnswers[
      HEMPSTEAD_FIELD_TO_QUESTION_MAP[field as keyof HempsteadRiskScoreCreate]
    ] = answer;
  });

  return questionsWithAnswers;
};
