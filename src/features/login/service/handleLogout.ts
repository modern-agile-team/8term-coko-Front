import { removeCookie } from '@utils/cookies';

const handleLogout = () => {
  removeCookie('accessToken');
  removeCookie('refreshToken');
  window.location.href = '/';
};

export default handleLogout;
