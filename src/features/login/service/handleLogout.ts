import { removeCookie } from '@utils/cookies';

const handleLogout = () => {
  removeCookie('jwt');
  window.location.reload(); // 로그아웃 후 새로고침
};

export default handleLogout;
