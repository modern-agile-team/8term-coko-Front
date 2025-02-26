import { User } from '../types';

export const isLoggedIn = (user: User | null): user is User => user !== null;
