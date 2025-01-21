import * as S from './styles';
import { getImageUrl } from '@utils/getImageUrl';
import { PropsWithChildren } from 'react';

interface QuestSectionProps {
  title: string;
  isLearn: boolean;
  isQuest: boolean;
}

export default function QuestSection({
  title,
  isLearn,
  isQuest,
  children,
}: PropsWithChildren<QuestSectionProps>) {
  const questUrlProps = { $isLearn: isLearn, $isQuest: isQuest };

  return (
    <S.QuestContainer {...questUrlProps}>
      <S.QuestSection {...questUrlProps}>
        <S.QuestContentWrapper {...questUrlProps}>
          <S.QuestContent {...questUrlProps}>
            <S.QuestIcon
              src={getImageUrl('폭탄-아이콘.svg')}
              {...questUrlProps}
              alt="폭탄 아이콘"
            />
            <S.QuestHeading {...questUrlProps}>{title}</S.QuestHeading>
          </S.QuestContent>
          {children}
        </S.QuestContentWrapper>
      </S.QuestSection>
    </S.QuestContainer>
  );
}
