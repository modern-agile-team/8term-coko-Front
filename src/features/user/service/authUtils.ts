import { User } from '@features/user/types';

export const isLoggedIn = (user: User | null): user is User => user !== null;
