import { useEffect, useRef } from 'react';
import { usePreservedCallback } from '@modern-kit/react';

/**
 * @description
 * 이 훅은 지정한 요소의 외부를 클릭할 때 지정된 콜백 함수를 실행하도록 도와줍니다.
 * 주로 모달 요소에서 외부 클릭을 감지하여 동작을 제어할 때 사용되며, useModal과 호환이 잘 되어 있습니다.
 *
 * @param callback 외부 클릭 시 호출할 콜백 함수
 * @param excludeRefs 외부 클릭 감지에서 제외할 요소들의 ref 배열 (optional)
 *
 * @example
 * const modalRef = useOutsideClick(() => {
 *   console.log('외부 클릭');
 * }, { excludeRefs: [buttonRef, inputRef] });
 *
 * return (
 *   <>
 *     <div ref={modalRef}>모달 내용</div>
 *     <button ref={buttonRef}>버튼</button>
 *   </>
 * );
 */
const useOutsideClick = (
  callback: () => void,
  options?: { excludeRefs?: React.RefObject<HTMLElement | null>[] }
) => {
  const ref = useRef<HTMLDivElement>(null);
  const preservedCallback = usePreservedCallback(callback);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;

      const filteredExcludeRefs = options?.excludeRefs?.filter(
        excludeRef => excludeRef.current !== null
      );

      const isExcluded = filteredExcludeRefs?.some(
        excludeRef => excludeRef.current && excludeRef.current.contains(target)
      );

      if (ref.current && !ref.current.contains(target) && !isExcluded) {
        preservedCallback();
      }
    };

    document.addEventListener('mousedown', onClickOutside);

    return () => {
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, [preservedCallback, options?.excludeRefs]);

  return ref;
};

export default useOutsideClick;
