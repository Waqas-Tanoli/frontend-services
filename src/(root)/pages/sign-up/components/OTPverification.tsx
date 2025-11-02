import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { HiOutlineChevronLeft } from 'react-icons/hi';
import { z } from 'zod';

import {
  Button,
  Form,
  FormField,
  FormItem,
  FormMessage,
  Heading,
} from '@/src/shared/ui';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  SubHeading,
} from '@/src/shared/ui';

const otpSchema = z.object({
  code: z.string().min(4, 'The verification code should be 4 digits'),
});

type OTPData = z.infer<typeof otpSchema>;

interface Props {
  onBackClick: () => void;
}

export const OTPverification = ({ onBackClick }: Props) => {
  const form = useForm<OTPData>({
    resolver: zodResolver(otpSchema),
    values: {
      code: '',
    },
  });

  const onValid = (otpData: OTPData) => {
    alert(otpData.code);
  };

  return (
    <>
      <Button
        variant="ghost"
        onClick={onBackClick}
        className="mb-5 xl:absolute xl:top-0 xl:mb-0"
      >
        <HiOutlineChevronLeft aria-hidden />
        Back
      </Button>

      <div className="flex flex-col items-center">
        <Heading
          as="h1"
          className="mb-2"
        >
          Verify your email
        </Heading>

        <SubHeading className="mb-8 text-center">
          To complete your registration, we&apos;ve sent a verification code to
          your email. Please check your inbox and enter the code below.
        </SubHeading>

        <Form {...form}>
          <form
            className="w-full max-w-screen-sm"
            onSubmit={form.handleSubmit(onValid)}
          >
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem className="mb-8">
                  <InputOTP
                    maxLength={6}
                    value={field.value}
                    onChange={field.onChange}
                    autoFocus
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                    </InputOTPGroup>
                  </InputOTP>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              full
            >
              Sign up
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};
