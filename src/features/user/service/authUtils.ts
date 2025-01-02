import { User } from '../types';

export const isLoggedIn = (user: User | null) => user !== null;
