import { getCookie } from '@utils/cookies';

/**
 * @description
 * 이 커스텀 훅은 사용자의 로그인 상태를 판별합니다.
 * JWT 토큰이 쿠키에 존재하는지를 확인하여 로그인 여부를 반환합니다.
 *
 * @returns
 * `isLoggedIn`: 사용자가 로그인 상태인지 여부
 *
 * @example
 * const { isLoggedIn } = useAuth();
 *
 * if (isLoggedIn) {
 *   console.log("사용자가 로그인 상태입니다.");
 * } else {
 *   console.log("로그인이 필요합니다.");
 * }
 */
const useAuth = () => {
  const jwt = getCookie('jwt');

  return {
    isLoggedIn: !!jwt, // JWT가 존재하면 true, 없으면 false
  };
};

export default useAuth;
