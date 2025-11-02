export const USER_ROLE = {
  TENANT: 'tenant',
  PROPERTY_MANAGER: 'property_manager',
} as const;

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  role: (typeof USER_ROLE)[keyof typeof USER_ROLE];
}
