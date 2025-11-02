'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

import { BackButton } from '@/src/(root)/components/BackButton';
import { linkFactory } from '@/src/shared/constants/linkFactory';
import {
  Form,
  Heading,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  Button,
  Input,
  SubHeading,
  buttonVariants,
} from '@/src/shared/ui';

import { SignupData, signupSchema } from '../lib/signupSchema';

interface Props {
  onSuccess: () => void;
}

export const SignupForm = ({ onSuccess }: Props) => {
  const form = useForm<SignupData>({
    resolver: zodResolver(signupSchema),
    values: {
      email: '',
      password: '',
    },
  });

  const onValid = (loginData: SignupData) => {
    Promise.resolve(loginData).then(() => onSuccess());
  };

  return (
    <>
      <div className="mb-5 flex w-full items-center justify-between xl:absolute xl:top-0 xl:mb-0">
        <BackButton />

        <Link
          href={linkFactory.root.getLogInPage()}
          className={buttonVariants({ variant: 'link' })}
        >
          I already have an account
        </Link>
      </div>

      <div className="flex flex-col items-center">
        <Heading
          as="h1"
          className="mb-2"
        >
          Sign up the platform
        </Heading>

        <SubHeading className="mb-8 text-center">
          If you&apos;re a property manager, please use the link from the email
          we&apos;ve sent.
        </SubHeading>

        <Form {...form}>
          <form
            className="mb-8 w-full max-w-screen-sm"
            onSubmit={form.handleSubmit(onValid)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormControl>
                    <Input
                      autoFocus
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mb-8">
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Create a password"
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
              Continue
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};
