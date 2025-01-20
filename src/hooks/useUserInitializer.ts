import { useEffect } from 'react';
import useUserStore from '@store/useUserStore';
import { authQuery } from '@features/auth/queries';

const useUserInitializer = () => {
  const { setUser, clearUser } = useUserStore();
  const { data: user, isError } = authQuery.verify();

  useEffect(() => {
    if (user) setUser(user);
    if (isError) clearUser();
  }, [user, isError, setUser, clearUser]);
};

export default useUserInitializer;
