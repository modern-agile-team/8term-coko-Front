import { useState, useEffect, useCallback } from 'react';
import { usePreservedCallback } from '@modern-kit/react';
import useOutsideClick from '@hooks/useOutsideClick';
import useIsFirstMount from '@hooks/useIsFirstMount';

/**
 * @description
 * 이 훅은 팝오버 상태를 관리하고 외부 클릭을 감지하여 팝오버를 닫는 동작을 처리합니다.
 *
 * @param {Object} options - 옵션 객체 (optional)
 * @param {Function} options.callback - 팝오버 상태가 변경될 때 호출되는 콜백 함수
 *                                          콜백은 현재 상태 (isOpen: boolean)를 매개변수로 받음
 * @param {React.RefObject<HTMLElement>[]} options.excludeRefs - 외부 클릭 감지에서 제외할 요소들의 ref 배열
 *
 * @returns - 팝오버 상태 관리와 관련된 메서드와 ref를 반환
 * @returns {boolean} `isOpen` - 팝오버의 현재 열림 상태
 * @returns {Function} `togglePopover` - 팝오버 열림/닫힘 상태를 토글하는 함수
 * @returns {Function} `openPopover` - 팝오버 여는 함수
 * @returns {Function} `closePopover` - 팝오버 닫는 함수
 * @returns {React.RefObject<HTMLElement>} `popoverRef` - 팝오버 요소에 연결할 ref 객체
 *
 * @example
 * import { useRef } from 'react';
 * import usePopover from '@hooks/usePopover';
 *
 * function ProfileComponent() {
 *   const profileRef = useRef<HTMLDivElement>(null);
 *   const { isOpen, togglePopover, openPopover, closePopover, popoverRef } = usePopover({
 *     excludeRefs: [profileRef],
 *     callback: (isOpen) => console.log('Popover state changed:', isOpen),
 *   });
 *
 *   return (
 *     <div ref={profileRef} onClick={togglePopover}>
 *       <button>프로필</button>
 *       {isOpen && (
 *         <div ref={popoverRef}>
 *           <p>유저이름</p>
 *         </div>
 *       )}
 *     </div>
 *   );
 * };
 */
const usePopover = (options?: {
  callback?: (isOpen?: boolean) => void;
  excludeRefs?: React.RefObject<HTMLElement>[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isFirst = useIsFirstMount();

  const preservedCallback = usePreservedCallback((isOpen: boolean) => {
    if (options?.callback) {
      options?.callback(isOpen);
    }
  });

  const togglePopover = useCallback(() => setIsOpen(prev => !prev), []);
  const openPopover = useCallback(() => setIsOpen(true), []);
  const closePopover = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (isFirst) {
      return;
    }
    preservedCallback(isOpen);
  }, [isOpen]);

  const popoverRef = useOutsideClick(() => {
    if (isOpen) togglePopover();
  }, options);

  return { isOpen, togglePopover, openPopover, closePopover, popoverRef };
};

export default usePopover;
