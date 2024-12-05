import { useEffect, useRef } from 'react';
import { usePreservedCallback } from '@modern-kit/react';

/**
 * @description
 * 이 훅은 지정한 요소의 외부를 클릭할 때 지정된 콜백 함수를 실행하도록 도와줍니다.
 * 주로 모달 요소에서 외부 클릭을 감지하여 동작을 제어할 때 사용되며, useModal과 호환이 잘 되어 있습니다.
 *
 * @param callback 외부 클릭 시 호출할 콜백 함수
 *
 * @example
 * const modalRef = useOutsideClick(() => {
 *   console.log('외부 클릭');
 * });
 *
 * return <div ref={modalRef}>모달 내용</div>;
 */

const useOutsideClick = (callback: () => void) => {
  const preservedCallback = usePreservedCallback(callback);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        preservedCallback();
      }
    };

    document.addEventListener('mousedown', onClickOutside);

    return () => {
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, [preservedCallback]);

  return ref;
};

export default useOutsideClick;
