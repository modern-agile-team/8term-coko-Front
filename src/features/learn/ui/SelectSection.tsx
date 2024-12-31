import * as S from './styles';
import SectionArrowButton from './SectionArrowButton';
import SectionNavigateContainer from './SectionNavigateContainer';

export default function SelectSection() {
  return (
    <S.SectionBoxWrapper>
      <SectionArrowButton direction="left" />
      <S.CompassText>W</S.CompassText>
      <S.SelectSectionBox>
        <SectionNavigateContainer />
      </S.SelectSectionBox>
      <S.CompassText>E</S.CompassText>
      <SectionArrowButton direction="right" />
    </S.SectionBoxWrapper>
  );
}
