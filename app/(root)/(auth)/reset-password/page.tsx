'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Heading,
  Input,
  SubHeading,
} from '@/src/shared/ui';

const resetPasswordSchema = z.object({
  email: z.string().email(),
});

type ResetPasswordData = z.infer<typeof resetPasswordSchema>;

const ResetPasswordPage = () => {
  const form = useForm<ResetPasswordData>({
    resolver: zodResolver(resetPasswordSchema),
    values: {
      email: '',
    },
  });

  const onValid = (data: ResetPasswordData) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <Heading
          as="h1"
          className="mb-2"
        >
          Reset your password
        </Heading>

        <SubHeading className="mb-8">
          Enter your email address to receive a reset link.
        </SubHeading>

        <Form {...form}>
          <form
            className="w-full max-w-screen-sm"
            onSubmit={form.handleSubmit(onValid)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-8">
                  <FormControl>
                    <Input
                      autoFocus
                      placeholder="Fill your email address"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              full
            >
              Reset a password
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default ResetPasswordPage;
