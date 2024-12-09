import { useState } from 'react';

/**
 * @description
 * 이 훅은 드롭다운의 열림/닫힘 상태를 관리합니다.
 * 드롭다운의 외부 클릭 이벤트가 필요한 경우 `useOutsideClick` 훅과 같이 사용할 수 있습니다.
 *
 * @example
 * const { isOpen, toggleDropdown, closeDropdown } = useDropdown();
 *
 * return (
 *   <>
 *     <button onClick={toggleDropdown}>Toggle</button>
 *     {isOpen && <div>Dropdown Content</div> }
 *   </>
 * );
 */
const useDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(prev => !prev);
  const closeDropdown = () => setIsOpen(false);

  return { isOpen, toggleDropdown, closeDropdown };
};

export default useDropdown;
