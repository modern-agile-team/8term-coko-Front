import { BADGE_IMAGE_LIST } from '@/features/intro/constants';
import { BadgeContainer, BadgeList } from '@/features/intro/ui/styles';
import { getImageNameFromUrl } from '@/utils/getImageNameFromUrl';
import { getImageUrl } from '@/utils/getImageUrl';
import {
  useHover,
  useInterval,
  useTimeout,
  useToggle,
} from '@modern-kit/react';
import { useCallback, useState } from 'react';

export default function BadgeIntro() {
  const { ref: containerRef, isHovered } = useHover<HTMLDivElement>({
    onEnter: () => {
      toggleIsPaused();
      document.addEventListener('wheel', blockScroll, { passive: false });
    },
    onLeave: () => {
      toggleIsPaused();
      document.removeEventListener('wheel', blockScroll);
    },
  });
  const [isPaused, toggleIsPaused] = useToggle(false);

  const blockScroll = useCallback((e: WheelEvent) => {
    e.preventDefault();
  }, []);

  const handleWheel: React.WheelEventHandler<HTMLDivElement> = e => {
    if (!isHovered) return;
    if (!containerRef.current) return;

    const scrollAmount = e.deltaY;
    containerRef.current.scrollLeft += scrollAmount;
  };

  return (
    <>
      <BadgeContainer ref={containerRef} onWheel={handleWheel}>
        <BadgeList $isPaused={isPaused}>
          {BADGE_IMAGE_LIST.map(image => (
            <li key={image}>
              <img src={getImageUrl(image)} alt={getImageNameFromUrl(image)} />
            </li>
          ))}
          {BADGE_IMAGE_LIST.map(image => (
            <li key={image}>
              <img src={getImageUrl(image)} alt={getImageNameFromUrl(image)} />
            </li>
          ))}
        </BadgeList>
      </BadgeContainer>
    </>
  );
}
