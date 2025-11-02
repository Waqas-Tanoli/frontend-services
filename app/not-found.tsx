import Image from 'next/image';
import React from 'react';

import { Heading, SubHeading, Button } from '@/src/shared/ui';

import NotFoundBanner from '../public/images/404-banner.png';

const NotFound = () => {
  return (
    <main className="root-container grid min-h-screen grid-cols-1 content-center items-center gap-6 xl:grid-cols-12">
      <div className="col-span-6 hidden aspect-[1/1.26] xl:block">
        <Image
          priority
          src={NotFoundBanner}
          aria-hidden
          alt=""
          sizes="700px"
          className="rounded-[56px]"
        />
      </div>

      <div className="relative flex flex-col items-center xl:col-span-6">
        <Heading
          as="h1"
          className="mb-2 text-center"
        >
          We Couldn&apos;t Find That Page
        </Heading>

        <SubHeading className="mb-8 text-center">
          We&apos;re sorry, but the page you&apos;re looking for doesn&apos;t
          exist or might have been moved.
        </SubHeading>

        <Button>Come back</Button>
      </div>
    </main>
  );
};

export default NotFound;
