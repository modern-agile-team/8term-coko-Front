import SectionArrowButton from './SectionArrowButton';
import SectionNavigateButton from './SectionNavigateButton';
import { SectionBoxWrapper, SelectSectionBox, TextOverlay } from '../style';

export default function SelectSection() {
  return (
    <SectionBoxWrapper>
      <SectionArrowButton direction="left" />
      <TextOverlay>W</TextOverlay>
      <SelectSectionBox>
        <SectionNavigateButton />
      </SelectSectionBox>
      <TextOverlay>E</TextOverlay>
      <SectionArrowButton direction="right" />
    </SectionBoxWrapper>
  );
}
