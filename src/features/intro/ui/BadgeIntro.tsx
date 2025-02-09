import { BADGE_IMAGE_LIST } from '@/features/intro/constants';
import { BadgeContainer, BadgeList } from '@/features/intro/ui/styles';
import { getImageNameFromUrl } from '@/utils/getImageNameFromUrl';
import { getImageUrl } from '@/utils/getImageUrl';
import { useCallback, useRef, useState } from 'react';

export default function BadgeIntro() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const blockScroll = useCallback((e: WheelEvent) => {
    e.preventDefault();
  }, []);

  const handleWheel: React.WheelEventHandler<HTMLDivElement> = e => {
    if (!isHovered) return;
    if (!containerRef.current) return;

    const scrollAmount = e.deltaY;
    containerRef.current.scrollLeft += scrollAmount;
  };

  const handleOnMouseEnter = () => {
    document.addEventListener('wheel', blockScroll, { passive: false });
    setIsHovered(true);
  };

  const handleOnMouseLeave = () => {
    document.removeEventListener('wheel', blockScroll);
    setIsHovered(false);
  };

  return (
    <>
      <BadgeContainer
        ref={containerRef}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        onWheel={handleWheel}
      >
        <BadgeList>
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
