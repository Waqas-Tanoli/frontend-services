'use client';

import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Button,
  Input,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  toast,
} from '@/src/shared/ui';

const formSchema = z.object({
  first_name: z.string().min(1, 'Required'),
  last_name: z.string().min(1, 'Required'),
  email: z.string().email(),
  organization: z.string(),
});

type FormSchema = z.infer<typeof formSchema>;

export const RequestDemoForm = () => {
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      organization: '',
    },
  });

  const onValid = (values: FormSchema) => {
    emailjs
      .send('service_n0ts8rl', 'template_jaus13f', values, {
        publicKey: 'ayFP9CRPMnNlupAUW',
      })
      .then(() => {
        setShowSuccessDialog(true);
        form.reset();
      })
      .catch(() =>
        toast.error('Something went wrong!', {
          description: 'Please reach out to our support team.',
        }),
      );
  };

  return (
    <>
      <Dialog
        open={showSuccessDialog}
        onOpenChange={setShowSuccessDialog}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>The demo was requested!</DialogTitle>
            <DialogDescription>
              Our team will reach out to you soon.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onValid)}
          className="space-y-6"
        >
          <div className="flex flex-col gap-4 sm:flex-row">
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="text-gray-700 font-semibold">
                    First Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your first name"
                      {...field}
                      classNames={{
                        input:
                          'bg-gray-50 border-none focus:border-none focus:ring-0 focus:outline-none shadow-none rounded-lg',
                      }}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="text-gray-700 font-semibold">
                    Last Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your last name"
                      {...field}
                      classNames={{
                        input:
                          'bg-gray-50 border-none focus:border-none focus:ring-0 focus:outline-none shadow-none rounded-lg',
                      }}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-semibold">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    {...field}
                    classNames={{
                      input:
                        'bg-gray-50 border-none focus:border-none focus:ring-0 focus:outline-none shadow-none rounded-lg',
                    }}
                  />
                </FormControl>
                <FormMessage className="text-red-500 text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="organization"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-semibold">
                  Organization
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your organization name"
                    {...field}
                    classNames={{
                      input:
                        'bg-gray-50 border-none focus:border-none focus:ring-0 focus:outline-none shadow-none rounded-lg',
                    }}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Request a Demo
          </Button>
        </form>
      </Form>
    </>
  );
};
