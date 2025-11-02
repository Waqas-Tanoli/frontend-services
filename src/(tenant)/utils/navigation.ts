import {
  HiOutlineCog,
  HiOutlinePaperAirplane,
  HiOutlineHome,
} from 'react-icons/hi';
import { IoTicketOutline } from 'react-icons/io5';

import { linkFactory } from '@/src/shared/constants/linkFactory';

export const NAVIGATION = [
  {
    title: 'General',
    items: [
      {
        icon: HiOutlineHome,
        text: 'Rent',
        link: linkFactory.tenant.getRentPage(),
      },
      {
        icon: IoTicketOutline,
        text: 'Tickets',
        link: linkFactory.tenant.getTicketsPage(),
      },
    ],
  },
  {
    title: 'Other',
    items: [
      {
        icon: HiOutlinePaperAirplane,
        text: 'Chat',
        link: linkFactory.tenant.getChatPage(),
      },
      {
        icon: HiOutlineCog,
        text: 'Settings',
        link: linkFactory.tenant.getSettingsPage(),
      },
    ],
  },
] as const;
