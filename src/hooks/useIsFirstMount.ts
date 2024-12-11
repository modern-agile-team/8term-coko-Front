import { useRef, useEffect } from 'react';

/**
 * @description 해당 컴포넌트가 초기 마운트인지 체크해주는 훅
 *
 * @returns {boolean} 초기 마운트 여부
 */
const useIsFirstMount = (): boolean => {
  const isFirstMount = useRef(true);

  useEffect(() => {
    isFirstMount.current = false; // 초기 마운트 이후 false로 설정
  }, []);

  return isFirstMount.current;
};

export default useIsFirstMount;
