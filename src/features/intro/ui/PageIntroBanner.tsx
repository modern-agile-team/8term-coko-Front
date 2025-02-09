import {
  IntroCard,
  IntroImage,
  PageIntroWrapper,
} from '@/features/intro/ui/styles';
import { getImageNameFromUrl } from '@/utils/getImageNameFromUrl';
import { getImageUrl } from '@/utils/getImageUrl';
import { useIntersectionObserver } from '@modern-kit/react';
import { useState } from 'react';

interface PageIntroProps {
  label: string;
  mainTitle: string;
  description: string;
  image: string;
  orderChange: boolean;
  backgroundColor: string;
}

export default function PageIntroBanner({
  label,
  mainTitle,
  description,
  image,
  orderChange,
  backgroundColor,
}: PageIntroProps) {
  const [isVisible, setIsVisible] = useState(false);

  const { ref: targetRef } = useIntersectionObserver({
    onIntersectStart: () => {
      setIsVisible(true);
    },
    onIntersectEnd: () => {
      setIsVisible(false);
    },
  });

  return (
    <PageIntroWrapper
      $orderChange={orderChange}
      $backgroundColor={backgroundColor}
      ref={targetRef}
      $isVisible={isVisible}
    >
      <IntroCard $alignItems="flex-start">
        <h3>{label}</h3>
        <h1>{mainTitle}</h1>
        <p>{description}</p>
      </IntroCard>
      <IntroImage src={getImageUrl(image)} alt={getImageNameFromUrl(image)} />
    </PageIntroWrapper>
  );
}
