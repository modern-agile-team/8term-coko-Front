import { useEffect } from 'react';
import useUserStore from '@store/useUserStore';
import { authQuery } from '@features/auth/queries';

export default function UserInitializer() {
  const { setUser, clearUser } = useUserStore();
  const { data: user, isError } = authQuery.verify();

  useEffect(() => {
    if (user) setUser(user);
    if (isError) clearUser();
  }, [user, isError, setUser, clearUser]);

  return null; // 렌더링할 UI가 없으므로 null 반환
}
