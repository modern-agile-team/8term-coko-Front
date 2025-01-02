import { create } from 'zustand';
import type { User } from '@features/user/types';

interface State {
  user: User | null;
}
interface Actions {
  setUser: (user: User) => void;
}
const useUserStore = create<State & Actions>(set => ({
  //나중에 로그인 구현 시 로직 변경하기
  user: null,
  setUser: user => set(() => ({ user })),
}));
export default useUserStore;
