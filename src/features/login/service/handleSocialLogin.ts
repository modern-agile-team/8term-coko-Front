const BASE_URL = import.meta.env.VITE_BASE_URL;

const handleSocialLogin = (provider: 'google' | 'kakao' | 'github') => {
  const redirectUrl = `${BASE_URL}/auth/${provider}`;
  window.location.href = redirectUrl;
};

export default handleSocialLogin;
