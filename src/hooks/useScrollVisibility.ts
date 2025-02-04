import { useState, useEffect } from 'react';
import { useThrottle } from '@modern-kit/react';

export default function useScrollVisibility() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useThrottle(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setShow(false); // 스크롤을 내릴 때 숨김
    } else {
      setShow(true); // 스크롤을 올릴 때 표시
    }
    setLastScrollY(currentScrollY);
  }, 500); // 0.5초 간격으로 쓰로틀링 적용

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return show;
}
