import { useRef, useEffect } from 'react';

/**
 * @description 해당 컴포넌트가 초기 렌더링인지 체크해주는 훅
 *
 * @returns {boolean} 초기 렌더링 여부
 */
const useIsFirstMount = (): boolean => {
  const isFirstRender = useRef(true);

  useEffect(() => {
    isFirstRender.current = false; // 첫 번째 렌더링 이후 false로 설정
  }, []);

  return isFirstRender.current;
};

export default useIsFirstMount;
