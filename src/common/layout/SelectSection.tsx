import SectionArrowButton from '../ui/SectionArrowButton';
import SectionNavigateButton from '../ui/SectionNavigateButton';
import { SelectSectionBox } from './style';

export default function SelectSection() {
  return (
    <>
      <SelectSectionBox>
        <SectionArrowButton />
        <SectionNavigateButton />
        <SectionArrowButton />
      </SelectSectionBox>
    </>
  );
}
