import { useState, useCallback } from 'react';
import useOutsideClick from '@hooks/useOutsideClick';

/**
 * @description
 * 이 훅은 팝오버의 상태를 관리하고 외부 클릭을 감지하여 팝오버를 닫는 동작을 간단하게 처리할 수 있도록 도와줍니다.
 *
 * @param excludeRefs 외부 클릭 감지에서 제외할 요소들의 ref 배열 (optional)
 *
 * @example
 * const profileRef = useRef<HTMLDivElement>(null);
 * const { isOpen, togglePopover, popoverRef } = usePopover({
 *   excludeRefs: [profileRef]
 * });
 *
 * return (
 *   <div ref={profileRef} onClick={togglePopover}>
 *     <button>프로필</button>
 *     {isOpen && (
 *       <div ref={popoverRef}>
 *         <p>유저이름</p>
 *       </div>
 *     )}
 *   </div>
 * );
 */
const usePopover = (options?: {
  excludeRefs?: React.RefObject<HTMLElement>[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = useCallback(() => setIsOpen(prev => !prev), []);

  const popoverRef = useOutsideClick(() => {
    if (isOpen) setIsOpen(false);
  }, options);

  return { isOpen, togglePopover, popoverRef };
};

export default usePopover;
