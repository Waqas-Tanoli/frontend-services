'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// import { BackButton } from '@/src/(root)/components/BackButton';
import { linkFactory } from '@/src/shared/constants/linkFactory';
import { useUser } from '@/src/shared/store/user';
import {
  Button,
  buttonVariants,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Heading,
  Input,
} from '@/src/shared/ui';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, 'Password is required'),
});

type LoginData = z.infer<typeof loginSchema>;

const LogInPage = () => {
  const { login } = useUser();

  const form = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    values: {
      email: '',
      password: '',
    },
  });

  const onValid = (loginData: LoginData) => login(loginData);

  return (
    <>
      <div className="mb-5 flex w-full items-center justify-between xl:absolute xl:top-0 xl:mb-0">
        {/* <BackButton /> */}

        <Link
          href={linkFactory.root.getSignUpPage()}
          className={buttonVariants({ variant: 'link' })}
        >
          I do not have an account yet
        </Link>
      </div>

      <div className="flex w-full flex-col items-center">
        <Heading
          as="h1"
          className="mb-8 text-center"
        >
          Log in the platform
        </Heading>

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
                      placeholder="Fill a password"
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
              Log In
            </Button>
          </form>
        </Form>

        <p className="mb-2 font-bold">Forgot a password?</p>

        <Link
          href={linkFactory.root.getResetPasswordPage()}
          className={buttonVariants({ variant: 'link' })}
        >
          Click here
        </Link>
      </div>
    </>
  );
};

export default LogInPage;
