import { create } from 'zustand';
import type { User } from '@features/user/types';

interface State {
  user?: User;
}
interface Actions {
  setUser: (user: User) => void;
  clearUser: () => void;
}

const useUserStore = create<State & Actions>(set => ({
  user: undefined,
  setUser: user => set(() => ({ user })),
  clearUser: () => set(() => ({ user: undefined })),
}));

export default useUserStore;
