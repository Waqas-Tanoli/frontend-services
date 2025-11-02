import { User } from '@/src/shared/types/User';

export interface IMockRent {
  id: number;
  due: string;
  date: string;
  landlord: User;
  amount: number;
  status: 'paid' | 'pending';
  address: string;
  unit: number;
}

const MOCK_LANDLORD: User = {
  id: 1111111,
  email: 'iamlandlord@gmail.com',
  first_name: 'Andrew',
  last_name: 'Hunter',
  role: 'property_manager',
};

export const MOCK_RENTS: IMockRent[] = [
  {
    id: 1,
    due: '02/06/2020',
    date: 'some date',
    landlord: MOCK_LANDLORD,
    amount: 1900,
    status: 'pending',
    address: '151 West 42nd Street, New York, NY 10036',
    unit: 222,
  },
  {
    id: 2,
    due: 'some date',
    date: 'some date',
    landlord: MOCK_LANDLORD,
    amount: 1900,
    status: 'paid',
    address: '151 West 42nd Street, New York, NY 10036',
    unit: 222,
  },
  {
    id: 3,
    due: 'some date',
    date: 'some date',
    landlord: MOCK_LANDLORD,
    amount: 1900,
    status: 'paid',
    address: '151 West 42nd Street, New York, NY 10036',
    unit: 222,
  },
];
