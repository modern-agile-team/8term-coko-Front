import { useInterval } from '@modern-kit/react';
import { getImageUrl } from '@utils/getImageUrl';
import { useState } from 'react';
import { HandsUpCokoImg, LegendKeycapMessageImg } from './style';

const messageFileNames = [
  '코코-멘트1.svg',
  '코코-멘트2.svg',
  '코코-멘트3.svg',
  '코코-멘트4.svg',
  '코코-멘트5.svg',
];

interface KeycapAdventureIntroProps {
  delay?: number;
}

export default function KeycapAdventureIntro({
  delay = 5000, // 기본값 5000ms
}: KeycapAdventureIntroProps) {
  const [messageIndex, setMessageIndex] = useState(0);

  useInterval(() => {
    setMessageIndex(prevIndex => (prevIndex + 1) % messageFileNames.length);
  }, delay);

  return (
    <>
      <LegendKeycapMessageImg
        src={getImageUrl(messageFileNames[messageIndex])}
      />
      <HandsUpCokoImg src={getImageUrl('손든-코코.svg')} />
    </>
  );
}
