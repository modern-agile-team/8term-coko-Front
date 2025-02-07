import * as S from '@/pages/intro/styles';
import { getImageUrl } from '@/utils/getImageUrl';

interface PageIntroProps {
  label: string;
  mainTitle: string;
  description: string;
  image: string;
  orderChange?: boolean;
  backgroundColor?: string;
}
export default function PageIntro({
  label,
  mainTitle,
  description,
  image,
  orderChange = false,
  backgroundColor = '#fff',
}: PageIntroProps) {
  return (
    <S.PageIntroWrapper
      $orderChange={orderChange}
      $backgroundColor={backgroundColor}
    >
      <S.IntroCard $alignItems="flex-start">
        <h5> {label}</h5>
        <h1>{mainTitle}</h1>
        <p>{description}</p>
      </S.IntroCard>
      <S.IntroImage src={getImageUrl(image)} />
    </S.PageIntroWrapper>
  );
}
