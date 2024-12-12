// import { setCookie } from '@utils/cookies';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const handleLogin = (provider: 'google' | 'kakao' | 'github') => {
  const redirectUrl = `${BASE_URL}/auth/${provider}`;
  window.location.href = redirectUrl;

  // 테스트용 accessToken 및 refreshToken 생성 및 쿠키에 저장 (실제 Service에 배포할 때는 주석 달거나 삭제)
  // const fakeAccessToken = 'test.access.token';
  // const fakeRefreshToken = 'test.refresh.token';

  // setCookie('accessToken', fakeAccessToken, { path: '/', maxAge: 3600 }); // 1시간 유효
  // setCookie('refreshToken', fakeRefreshToken, {
  //   path: '/',
  //   maxAge: 3600 * 24 * 30,
  // }); // 30일 유효

  // alert('AccessToken 생성 완료: ' + fakeAccessToken);
  // alert('RefreshToken 생성 완료: ' + fakeRefreshToken);
};

export default handleLogin;
