import { create } from 'zustand';
import type { User } from '@features/user/types';

interface State {
  user: User | null;
}
interface Actions {
  setUser: (user: User) => void;
  clearUser: () => void;
}

const useUserStore = create<State & Actions>(set => ({
  user: null,
  setUser: user => set(() => ({ user })),
  clearUser: () => set(() => ({ user: null })),
}));

export default useUserStore;
