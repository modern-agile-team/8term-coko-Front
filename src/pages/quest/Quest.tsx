import { useState } from 'react';
import * as globalS from '@/style/style';
import * as S from './styles';
import { getImageUrl } from '@utils/getImageUrl';
import MenuBar from '@common/layout/MenuBar';
import DailyQuest from '@features/quest/ui/DailyQuest';
import MainQuest from '@/features/quest/ui/MainQuest';
import CokoLogo from '@common/layout/CokoLogo';
import Header from '@common/layout/Header';

export default function Quest() {
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <>
      <globalS.Wrapper>
        <globalS.LeftSection>
          <CokoLogo />
          <MenuBar />
        </globalS.LeftSection>
        <globalS.RightSection>
          <Header />
          <S.TogglePaperImg
            $isOpen={isOpen}
            src={getImageUrl(
              isOpen ? '펼친-퀘스트-종이.svg' : '닫힌-퀘스트-종이.svg'
            )}
            onClick={handleImageClick}
          />
          <S.QuestBackViewCoko src={getImageUrl('퀘스트-뒷모습-코코.svg')} />
        </globalS.RightSection>
      </globalS.Wrapper>
      <globalS.Layout>
        <DailyQuest />
        <MainQuest />
      </globalS.Layout>
    </>
  );
}
