import { getCookie } from '@utils/cookies';

/**
 * @description
 * 사용자의 로그인 상태를 판별합니다.
 * accessToken이 쿠키에 존재하는지를 확인하여 로그인 여부를 반환합니다.
 *
 * @returns
 * `boolean`: 사용자가 로그인 상태인지 여부
 *
 * @example
 * if (isLoggedIn()) {
 *   console.log("사용자가 로그인 상태입니다.");
 * } else {
 *   console.log("로그인이 필요합니다.");
 * }
 */
const isLoggedIn = (): boolean => {
  const accessToken = getCookie('accessToken');
  return !!accessToken; // accessToken이 존재하면 true, 없으면 false
};

export default isLoggedIn;
