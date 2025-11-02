import { hempsteadRiskScoreCreateSchema } from '@/src/entities/HempsteadRiskScore/domain/HempsteadRiskScoreCreate';
import { mapQuestionsToAnswers } from '@/src/entities/HempsteadRiskScore/lib/mapQuestionsToAnswers';
import { openaiClient } from '@/src/shared/utils/openaiClient';
import { supabase } from '@/src/shared/utils/supabaseClient';

const PROMPT_TEMPLATE = `
You are a landlord evaluating a potential tenant based on their responses. 
Your task is to assign a risk score from **1 to 10** where:
- **1** = Extremely high risk (likely to default on rent)
- **10** = No risk (ideal tenant)

Consider these factors:
  **Age**: Stability usually increases with age.
  **Education**: Higher education may indicate stable employment.
  **Credit Score**: Higher scores mean better financial responsibility.
  **Income**: Higher income reduces risk.
  **Employment**: Full-time and self-employed are more stable.
  **Rent Spending %**: If they spend over 50% of income on rent, it's risky.
  **Missed Rent Payments**: Missing rent in the past 24 months is a **major risk**.
  **Current Address Duration**: Frequent moving may indicate instability.
  **Emergency Funds**: More savings reduce risk.

**Analyze the provided answers and return only a number like this:**
{ "riskScore": 7 }

Now, evaluate the following tenant:
`;

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const answers = hempsteadRiskScoreCreateSchema.parse(body);
    const questionsWithAnswers = mapQuestionsToAnswers(answers);

    try {
      // Estimate Risk Score
      const response = await openaiClient.chat.completions.create({
        model: 'gpt-4-turbo',
        messages: [
          { role: 'system', content: PROMPT_TEMPLATE },
          {
            role: 'user',
            content: JSON.stringify(
              Object.entries(questionsWithAnswers)
                .map(([question, answer]) => `${question}: ${answer}`)
                .join('\n'),
            ),
          },
        ],
        max_tokens: 50,
      });

      const responseContent = response.choices[0].message.content;

      const riskScore =
        responseContent ?
          (JSON.parse(responseContent) as { riskScore: number }).riskScore
        : null;

      if (!riskScore) {
        throw {};
      }

      const { data, error } = await supabase
        .from('hempstead-risk-scores')
        .insert([
          {
            ...answers,
            risk_score: riskScore,
          },
        ])
        .select()
        .single();

      if (error) throw error;

      return new Response(JSON.stringify(data), {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      throw error;
    }
  } catch (error) {
    new Response(JSON.stringify(error), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
