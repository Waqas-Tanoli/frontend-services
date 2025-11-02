'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import _ from 'lodash';
import Image from 'next/image';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FaApple, FaSpinner } from 'react-icons/fa';
import { z } from 'zod';

import GoogleIcon from '@/public/icons/icon_google.svg';
import {
  Badge,
  Button,
  Heading,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/src/shared/ui';

import { IMockRent, MOCK_RENTS } from './MOCK_RENTS';
import HouseImage from '../../../../public/images/auth-layout.png';

const RentPage = () => {
  const [rents, setRents] = useState<IMockRent[]>(MOCK_RENTS);
  const [selectedRent, setSelectedRent] = useState<IMockRent | null>(null);

  const onPaySucceed = () => {
    setRents((current) =>
      current.map((rent) => {
        if (rent.id === selectedRent?.id) {
          return {
            ...rent,
            status: 'paid',
          };
        }

        return rent;
      }),
    );

    setSelectedRent(null);
  };

  return (
    <>
      <Heading
        as="h1"
        className="mb-8"
      >
        Rent Overview
      </Heading>

      <Sheet
        open={!!selectedRent}
        onOpenChange={() => setSelectedRent(null)}
      >
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Some title</SheetTitle>
            <SheetDescription>Some random text</SheetDescription>
          </SheetHeader>

          <div>
            <article className="mb-8 grid grid-cols-[auto_1fr_auto_auto] gap-4 rounded-lg border border-border px-4 py-2">
              <Image
                src={HouseImage}
                alt="house"
                className="size-14 self-center"
              />

              <div className="grid grid-cols-1 grid-rows-[auto_1fr] items-center gap-1">
                <h4 className="text-sm text-muted-foreground">Address</h4>

                <p>{selectedRent?.address}</p>
              </div>

              <div className="grid grid-cols-1 grid-rows-[auto_1fr] items-center gap-1">
                <h4 className="text-sm text-muted-foreground">Unit</h4>

                <p>{selectedRent?.unit}</p>
              </div>

              <div className="grid grid-cols-1 grid-rows-[auto_1fr] items-center gap-1">
                <h4 className="text-sm text-muted-foreground">Amount</h4>

                <p>{selectedRent?.amount}</p>
              </div>
            </article>

            <div className="mb-8 space-y-2">
              <Button
                full
                className="bg-black"
              >
                <FaApple className="size-6" />
                <span>Pay</span>
              </Button>

              <Button
                variant="outline"
                full
              >
                <Image
                  src={GoogleIcon}
                  alt="google"
                  className="size-6"
                />
                <span>Pay</span>
              </Button>
            </div>

            <p className="mb-8 text-center text-sm text-muted-foreground">
              Or pay with card
            </p>

            <div>
              <Heading
                as="h5"
                className="mb-2"
              >
                Payment details
              </Heading>

              <CheckoutForm
                amount={selectedRent?.amount || 0}
                onSubmit={onPaySucceed}
              />
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <ul className="space-y-2">
        {rents.map((rent) => (
          <li key={rent.id}>
            <article className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_110px] gap-4 rounded-lg border border-border px-4 py-2">
              <div className="grid grid-cols-1 grid-rows-[auto_1fr] items-center gap-1">
                <h4 className="text-sm text-muted-foreground">Rent due</h4>
                <p>{rent.due}</p>
              </div>

              <div className="grid grid-cols-1 grid-rows-[auto_1fr] items-center gap-1">
                <h4 className="text-sm text-muted-foreground">Date</h4>
                <p>{rent.date}</p>
              </div>

              <div className="grid grid-cols-1 grid-rows-[auto_1fr] items-center gap-1">
                <h4 className="text-sm text-muted-foreground">Landlord</h4>
                <p>{`${rent.landlord.first_name} ${rent.landlord.last_name}`}</p>
              </div>

              <div className="grid grid-cols-1 grid-rows-[auto_1fr] items-center gap-1">
                <h4 className="text-sm text-muted-foreground">Amount</h4>
                <p>{rent.amount}</p>
              </div>

              <div className="grid grid-cols-1 grid-rows-[auto_1fr] items-center gap-1">
                <h4 className="text-sm text-muted-foreground">Rent due</h4>

                <Badge variant={rent.status === 'paid' ? 'success' : 'warning'}>
                  {_.capitalize(rent.status)}
                </Badge>
              </div>

              <div className="self-center">
                {rent.status === 'pending' ?
                  <Button
                    size="sm"
                    full
                    onClick={() => setSelectedRent(rent)}
                  >
                    Pay now
                  </Button>
                : <Button
                    variant="outline"
                    size="sm"
                    full
                  >
                    See more
                  </Button>
                }
              </div>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
};

interface CheckoutFormProps {
  amount: IMockRent['amount'];
  onSubmit: () => void;
}

const cardSchema = z.object({
  number: z.string().regex(/^\d{16}$/, 'Card number must be exactly 16 digits'),
  expiration: z
    .string()
    .regex(
      /^(0[1-9]|1[0-2])\/\d{2}$/,
      'Expiration date must be in MM/YY format',
    )
    .refine(
      (date) => {
        const [month, year] = date.split('/').map(Number);
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear() % 100; // Last two digits of the year
        const currentMonth = currentDate.getMonth() + 1; // Months are zero-based
        return (
          year > currentYear || (year === currentYear && month >= currentMonth)
        );
      },
      {
        message: 'Expiration date must be in the future',
      },
    ),
  cvv: z.string().regex(/^\d{3}$/, 'CVV must be 3 digits'),
});

type CardData = z.infer<typeof cardSchema>;

const CheckoutForm = ({ amount, onSubmit }: CheckoutFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [unifiedError, setUnifiedError] = useState('');

  const { handleSubmit, control, formState } = useForm<CardData>({
    resolver: zodResolver(cardSchema),
    mode: 'onSubmit',
    values: {
      number: '',
      expiration: '',
      cvv: '',
    },
  });

  console.log(formState);

  const onValid = () => {
    setIsLoading(true);

    new Promise((resolve) => {
      setTimeout(resolve, 1000);
    })
      .then(() => {
        onSubmit();
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <form
      className="space-y-4"
      onSubmit={handleSubmit(onValid, (errors) => {
        setUnifiedError(Object.values(errors)[0].message as string);
      })}
    >
      <div className="grid grid-cols-2 grid-rows-2 overflow-hidden rounded-lg border border-border">
        <Controller
          control={control}
          name="number"
          render={({ field }) => (
            <input
              autoFocus
              placeholder="Card number"
              className="col-span-full h-12 border-b border-border px-4 focus:outline-none"
              value={field.value.replace(/(\d{4})/g, '$1 ').trim()}
              onChange={(event) =>
                field.onChange(event.target.value.replaceAll(' ', ''))
              }
              maxLength={19}
            />
          )}
        />

        <Controller
          control={control}
          name="expiration"
          render={({ field }) => (
            <input
              placeholder="MM/YY"
              className="h-12 px-4 focus:outline-none"
              {...field}
              max={5}
            />
          )}
        />

        <Controller
          control={control}
          name="cvv"
          render={({ field }) => (
            <input
              placeholder="CVV"
              className="h-12 border-l border-border px-4 focus:outline-none"
              {...field}
              max={3}
            />
          )}
        />
      </div>

      {unifiedError && (
        <p className="text-sm text-destructive">{unifiedError}</p>
      )}

      <Button
        type="submit"
        full
      >
        {isLoading ?
          <FaSpinner className="animate-spin" />
        : `Pay $${amount}`}
      </Button>
    </form>
  );
};

export default RentPage;
