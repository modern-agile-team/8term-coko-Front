import { authQuery } from '@features/auth/queries';

export const handleLogout = () => {
  const { mutate: logout } = authQuery.logout();

  return () =>
    logout(undefined, {
      onSuccess: () => {
        window.location.href = '/';
      },
      onError: error => {
        console.error('Logout failed:', error);
      },
    });
};
