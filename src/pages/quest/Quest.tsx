import * as globalS from '@style/styles';
import * as S from './styles';
import { getImageUrl } from '@utils/getImageUrl';
import MenuBar from '@common/layout/MenuBar';
import DailyQuest from '@features/quest/ui/DailyQuest';
import Challenge from '@/features/quest/ui/Challenges';
import Header from '@common/layout/Header';
import { useToggle } from '@modern-kit/react';

export default function Quest() {
  const [isOpen, toggleIsOpen] = useToggle(false);

  return (
    <>
      <globalS.Wrapper>
        <globalS.LeftSection>
          <MenuBar />
        </globalS.LeftSection>
        <globalS.RightSection>
          <Header />
          <S.TogglePaperImg
            $isOpen={isOpen}
            src={getImageUrl(
              isOpen ? '펼친-퀘스트-종이.svg' : '닫힌-퀘스트-종이.svg'
            )}
            onClick={toggleIsOpen}
          />
          <S.QuestBackViewCoko src={getImageUrl('퀘스트-뒷모습-코코.svg')} />
        </globalS.RightSection>
      </globalS.Wrapper>
      <globalS.Layout>
        <DailyQuest />
        <Challenge />
      </globalS.Layout>
    </>
  );
}
