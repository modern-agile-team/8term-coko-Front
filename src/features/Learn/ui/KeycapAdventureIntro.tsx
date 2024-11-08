import { HandsUpCokoImg, LegendKeycapMessageImg } from '../style';
import { useState, useLayoutEffect } from 'react';

const imgUrl = import.meta.env.VITE_IMG_BASE_URL;

const messageFilenames = [
  '코코-멘트1.svg',
  '코코-멘트2.svg',
  '코코-멘트3.svg',
  '코코-멘트4.svg',
  '코코-멘트5.svg',
];

// 이미지를 미리 로드하여 S3요청을 최소화
const preloadImages = messageFilenames.map(filename => {
  const img = new Image();
  img.src = `${imgUrl}${filename}`;
  return img;
});

export default function KeycapAdventureIntro() {
  const [messageIndex, setMessageIndex] = useState(0);

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex(prevIndex => (prevIndex + 1) % preloadImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <LegendKeycapMessageImg src={preloadImages[messageIndex].src} />
      <HandsUpCokoImg src={`${imgUrl}손든-코코.svg`} />
    </>
  );
}
