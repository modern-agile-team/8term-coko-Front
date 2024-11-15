import { HandsUpCokoImg, LegendKeycapMessageImg } from '../style';
import { useState, useLayoutEffect } from 'react';

const imgUrl = import.meta.env.VITE_IMG_BASE_URL;
const messageFileNames = [
  '코코-멘트1.svg',
  '코코-멘트2.svg',
  '코코-멘트3.svg',
  '코코-멘트4.svg',
  '코코-멘트5.svg',
];

export default function KeycapAdventureIntro() {
  const [messageIndex, setMessageIndex] = useState(0);

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex(prevIndex => (prevIndex + 1) % messageFileNames.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <LegendKeycapMessageImg
        src={`${imgUrl}${messageFileNames[messageIndex]}`}
      />
      <HandsUpCokoImg src={`${imgUrl}손든-코코.svg`} />
    </>
  );
}
