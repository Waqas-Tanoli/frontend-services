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
import { QUESTIONS } from '@/app/(root)/hempstead/lib/QUESTIONS';

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
      {isLoading || !!newHempsteadRiskScore ?
        <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl">
          <CardHeader>
            <CardTitle className="font-serif text-2xl font-light text-slate-800">
              Your Assessment Score
            </CardTitle>
          </CardHeader>

          <div className="flex justify-center py-8">
            {isLoading ?
              <LoaderCircle
                className="animate-spin text-blue-500"
                size={50}
              />
            : <span className="font-serif text-8xl font-light bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {newHempsteadRiskScore?.risk_score}
              </span>
            }
          </div>

          <CardFooter>
            <Button
              onClick={resetForm}
              className="bg-slate-800 hover:bg-slate-700 text-white font-serif text-lg px-8 py-3 rounded-xl"
            >
              New Assessment
            </Button>
          </CardFooter>
        </Card>
      : <form
          className="space-y-6"
          onSubmit={form.handleSubmit(onValid, onInvalid)}
        >
          {QUESTIONS.map((question, index) => (
            <MotionCard
              key={question.field}
              className="border-0 bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.2 * (index + 1),
                ease: 'easeOut',
              }}
            >
              <CardHeader>
                <CardTitle className="font-serif text-xl font-light text-slate-800">
                  {question.title}
                  <span className="text-red-400 ml-1">*</span>
                </CardTitle>
              </CardHeader>

              <Controller
                control={form.control}
                name={question.field}
                render={({ field }) => (
                  <ul className="flex flex-wrap gap-3 p-4">
                    {question.choices.map((choice) => {
                      const isChecked = field.value === choice;

                      return (
                        <li key={choice}>
                          <label
                            className={cn(
                              buttonVariants({
                                variant: isChecked ? 'default' : 'outline',
                                className:
                                  'font-serif text-base px-6 py-3 rounded-lg transition-all duration-300 border-2',
                              }),
                              isChecked ?
                                'bg-blue-500 border-blue-500 text-white shadow-lg'
                              : 'bg-white/60 border-slate-200 text-slate-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700',
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
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-serif text-xl py-4 rounded-xl shadow-xl transition-all duration-300"
          >
            Generate Assessment
          </Button>
        </form>
      }
    </>
  );
};
