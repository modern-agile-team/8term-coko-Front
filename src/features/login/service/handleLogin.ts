const BASE_URL = import.meta.env.VITE_BASE_URL;
// import { setCookie } from '@utils/cookies';

const handleLogin = (provider: 'google' | 'kakao' | 'github') => {
  const redirectUrl = `${BASE_URL}/auth/${provider}`;
  window.location.href = redirectUrl;

  // 테스트용 JWT 생성 및 쿠키에 저장
  // const fakeJwt = 'test.jwt.token';
  // setCookie('jwt', fakeJwt, { path: '/', maxAge: 3600 }); // 1시간 유효
  // alert('JWT 생성 완료: ' + fakeJwt);
};

export default handleLogin;
