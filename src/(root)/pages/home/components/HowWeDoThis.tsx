import { motion } from 'framer-motion';
import { LuHandshake, LuSettings, LuRepeat, LuRocket } from 'react-icons/lu';

import { Section } from './Section';

const CARDS = [
  {
    id: 1,
    icon: <LuHandshake />,
    title: 'We Work With You',
    content:
      'We start with a conversation. You talk, we listen—no rush. Together, we unpack what matters and turn it into a clear, actionable plan.',
  },
  {
    id: 2,
    icon: <LuSettings />,
    title: 'Feedback, Iterate, Refine',
    content:
      'In 48 hours, your idea becomes a working demo—built together, line by line. No fluff, just real progress.',
  },
  {
    id: 3,
    icon: <LuRepeat />,
    title: 'Feedback, Iterate, Refine',
    content:
      'Over 1–2 weeks, we refine the tool together. Your feedback drives updates—new workflows, integrations, or tweaks. We move at your pace.',
  },
  {
    id: 4,
    icon: <LuRocket />,
    title: 'Launch, Improve, Repeat',
    content:
      'Your product goes live—simple, secure, and ready to use. But we don’t stop there. We keep optimizing, updating, and supporting you as your needs evolve.',
  },
];

export const HowWeDoThis = () => {
  return (
    <Section title="How We Build AI Agents - Together.">
      <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {CARDS.map((card, i) => (
          <motion.li
            key={card.id}
            className="h-full"
            initial={{
              y: 50,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              ease: 'backOut',
              duration: 0.3,
              delay: i * 0.1,
            }}
            viewport={{ once: true, amount: 0.8 }}
          >
            <article className="h-full rounded-3xl border border-border p-6 md:p-8">
              <div className="mb-8 flex size-14 items-center justify-center rounded-2xl border border-primary bg-primary/5 md:size-16 [&>svg]:size-10 [&>svg]:stroke-primary [&>svg]:stroke-1 md:[&>svg]:size-12">
                {card.icon}
              </div>

              <h3 className="mb-4 text-xl font-semibold">{card.title}</h3>
              <p className="text-base font-medium">{card.content}</p>
            </article>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
};
