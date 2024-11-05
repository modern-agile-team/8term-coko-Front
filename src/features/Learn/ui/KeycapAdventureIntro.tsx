import { HandsUpCokoImg, LegendKeycapMessageImg } from '../style';
import { useState } from 'react';

const imgUrl = import.meta.env.VITE_IMG_BASE_URL;

export default function KeycapAdventureIntro() {
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  return (
    <>
      <LegendKeycapMessageImg
        src={`${imgUrl}전설의-키캡-메시지.svg`}
        $isVisible={isMessageVisible}
      />
      <HandsUpCokoImg
        src={`${imgUrl}손든-코코.svg`}
        onMouseEnter={() => setIsMessageVisible(true)}
        onMouseLeave={() => setIsMessageVisible(false)}
      />
    </>
  );
}
