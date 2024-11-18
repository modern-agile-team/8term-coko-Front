import SectionArrowButton from './SectionArrowButton';
import SectionNavigateContainer from './SectionNavigateContainer';
import { SectionBoxWrapper, SelectSectionBox, TextOverlay } from '../style';

export default function SelectSection() {
  return (
    <SectionBoxWrapper>
      <SectionArrowButton direction="left" />
      <TextOverlay>W</TextOverlay>
      <SelectSectionBox>
        <SectionNavigateContainer />
      </SelectSectionBox>
      <TextOverlay>E</TextOverlay>
      <SectionArrowButton direction="right" />
    </SectionBoxWrapper>
  );
}
