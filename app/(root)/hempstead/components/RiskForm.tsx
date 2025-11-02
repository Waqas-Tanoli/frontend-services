'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { LoaderCircle } from 'lucide-react';
import React, { useState } from 'react';
import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';

import { HempsteadRiskScore } from '@/src/entities/HempsteadRiskScore/domain/HempsteadRiskScore';
import {
  HempsteadRiskScoreCreate,
  hempsteadRiskScoreCreateSchema,
} from '@/src/entities/HempsteadRiskScore/domain/HempsteadRiskScoreCreate';
import { useHempstedRiskScoreCreate } from '@/src/entities/HempsteadRiskScore/service/useHempstedRiskScoreCreate';
import {
  Button,
  buttonVariants,
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
  toast,
} from '@/src/shared/ui';
import { cn } from '@/src/shared/utils';

import { QUESTIONS } from '../lib/QUESTIONS';

const MotionCard = motion(Card);

export const RiskForm = () => {
  const [newHempsteadRiskScore, setNewHempsteadRiskScore] =
    useState<Nullable<HempsteadRiskScore>>(null);

  const form = useForm<HempsteadRiskScoreCreate>({
    resolver: zodResolver(hempsteadRiskScoreCreateSchema),
  });

  const { isLoading, createHempsteadRiskScore } = useHempstedRiskScoreCreate();

  const onValid: SubmitHandler<HempsteadRiskScoreCreate> = async (values) => {
    const newHempsteadRiskScore = await createHempsteadRiskScore(values);

    if (newHempsteadRiskScore) {
      setNewHempsteadRiskScore(newHempsteadRiskScore);
    }
  };

  const onInvalid: SubmitErrorHandler<HempsteadRiskScoreCreate> = () => {
    toast.error('Missing Required Fields', {
      description:
        'Please fill in all required fields before submitting the form.',
    });
  };

  const resetForm = () => {
    form.reset();
    setNewHempsteadRiskScore(null);
  };

  return (
    <>
      {isLoading || !!newHempsteadRiskScore ? (
        <Card className="border-2   border-blue-200 bg-white/90 backdrop-blur-sm text-gray-800 shadow-lg rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-300/50 hover:scale-105 hover:border-blue-400">
          <CardHeader>
            <CardTitle className="text-xl font-luxury text-cyan-600">Your risk score is</CardTitle>
          </CardHeader>

          <div className="flex justify-center">
            {isLoading ? (
              <LoaderCircle
                className="animate-spin text-cyan-500"
                size={40}
              />
            ) : (
              <motion.span
                className="text-7xl font-luxury font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1, textShadow: '0 0 20px rgba(0, 255, 255, 0.8)' }}
                transition={{ duration: 0.5 }}
              >
                {newHempsteadRiskScore?.risk_score}
              </motion.span>
            )}
          </div>

          <CardFooter>
            <Button
              onClick={resetForm}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:opacity-90 hover:shadow-lg hover:shadow-cyan-300/50 transition-all duration-300 animate-pulse"
            >
              Try again
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <form
          className="space-y-5"
          onSubmit={form.handleSubmit(onValid, onInvalid)}
        >
          {QUESTIONS.map((question, index) => (
            <MotionCard
              key={question.field}
              className="border-2 border-blue-200 bg-white/80 backdrop-blur-sm text-gray-800 shadow-lg rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-300/50 hover:scale-105 hover:border-cyan-400"
              initial={{
                y: 50,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              whileHover={{ y: -5 }}
              transition={{
                duration: 0.3,
                delay: 0.3 * (index + 1),
                easings: ['easeOut'],
              }}
            >
              <CardHeader>
                <CardTitle className="font-luxury text-cyan-600">
                  {question.title}
                  <span className="text-red-400">*</span>
                </CardTitle>
              </CardHeader>

              <Controller
                control={form.control}
                name={question.field}
                render={({ field }) => (
                  <ul className="flex flex-wrap gap-2">
                    {question.choices.map((choice) => {
                      const isChecked = field.value === choice;

                      return (
                        <li key={choice}>
                          <label
                            className={cn(
                              buttonVariants({
                                variant: isChecked ? 'default' : 'outline',
                                className: 'pointer bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-90 hover:shadow-lg hover:shadow-cyan-300/50 transition-all duration-300',
                              }),
                              'pointer',
                            )}
                          >
                            <input
                              type="radio"
                              className="hidden"
                              {...field}
                              value={choice}
                              checked={isChecked}
                            />

                            {choice}
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                )}
              />
            </MotionCard>
          ))}

          <Button
            type="submit"
            className="bg-gradient-to-r from-cyan-500 m-10 to-blue-600 text-white font-semibold hover:opacity-90 hover:shadow-lg hover:shadow-cyan-300/50 transition-all duration-300 animate-pulse"
          >
            Submit
          </Button>
        </form>
      )}
    </>
  );
};