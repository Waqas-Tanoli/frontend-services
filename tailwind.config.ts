import type { Config } from 'tailwindcss';
import TailwindAnimate from 'tailwindcss-animate';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
      },
      colors: {
        background: {
          DEFAULT: 'hsl(var(--background))',
        },
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary--5))',
          1: 'hsl(var(--primary--1))',
          2: 'hsl(var(--primary--2))',
          3: 'hsl(var(--primary--3))',
          4: 'hsl(var(--primary--4))',
          5: 'hsl(var(--primary--5))',
          6: 'hsl(var(--primary--6))',
          7: 'hsl(var(--primary--7))',
          8: 'hsl(var(--primary--8))',
          9: 'hsl(var(--primary--9))',
          10: 'hsl(var(--primary--10))',
          11: 'hsl(var(--primary--11))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary--4))',
          1: 'hsl(var(--secondary--1))',
          2: 'hsl(var(--secondary--2))',
          3: 'hsl(var(--secondary--3))',
          4: 'hsl(var(--secondary--4))',
          5: 'hsl(var(--secondary--5))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        info: {
          DEFAULT: 'hsl(var(--info))',
          foreground: 'hsl(var(--info-foreground))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground))',
        },
        input: 'hsl(var(--input))',
        border: 'hsl(var(--border))',
        popover: 'hsl(var(--background))',
      },
      fontFamily: {
        'red-hat-display': 'var(--font-red-hat-display)',
      },
      fontSize: {
        xxs: ['10px', '1.75'],
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' },
        },
      },
      animation: {
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
      },
    },
  },
  plugins: [TailwindAnimate],
};
export default config;
