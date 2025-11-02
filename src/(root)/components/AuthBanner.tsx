import Image from 'next/image';
import React from 'react';

import BannerImage from '@/public/images/auth-layout.png';
import LiivLogo from '@/public/images/logo.png';

export const AuthBanner = () => (
  <aside className="relative grid h-full grid-cols-2 grid-rows-3 gap-2.5 overflow-hidden rounded-[56px] rounded-ss-none">
    <div className="relative z-10 rounded-ee-[56px] bg-background outline outline-[10px] outline-background">
      <p className="flex h-full flex-col rounded-[56px] bg-[#F6F6F6] p-6">
        {/* <span className="text-5xl font-bold">+90%</span> */}

        <span className="flex h-full items-center justify-center text-xl font-medium">
          {/* Positive responds from people */}
          Liiv’s technology puts fairness first—because where you live should
          never be determined by your race, income, or ZIP code.
        </span>

        {/* <span className="absolute bottom-0 right-0 rounded-ee-[56px] rounded-ss-[56px] bg-accent px-10 py-4 text-xl font-medium text-accent-foreground">
          Start now
        </span> */}
      </p>
    </div>

    {/* <p className="relative z-10 col-span-full row-start-3 flex flex-col items-end justify-end gap-4 px-14 pb-8 text-white">
      <span className="font-bold">Let&lsquo;s Solve Affordable Housing</span>
      <span className="text-7xl font-medium">WELCOME</span>
    </p> */}

    <Image
      src={LiivLogo}
      className="absolute bottom-20 right-20 w-32"
      alt="Liiv logo"
    />

    <Image
      priority
      src={BannerImage}
      aria-hidden
      alt=""
      sizes="700px"
      className="absolute inset-0 -z-10"
    />

    <div
      aria-hidden
      className="col-start-2 size-28 rounded-ss-[56px] shadow-[-10px_-10px_0_10px_#fff]"
    />

    <div
      aria-hidden
      className="row-start-2 size-28 rounded-ss-[56px] shadow-[-10px_-10px_0_10px_#fff]"
    />
  </aside>
);
