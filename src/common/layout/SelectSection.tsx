import SectionArrowButton from '../../features/Learn/ui/SectionArrowButton';
import SectionNavigateButton from '../../features/Learn/ui/SectionNavigateButton';
import { SelectSectionBox } from './style';

export default function SelectSection() {
  return (
    <SelectSectionBox>
      <SectionArrowButton />
      <SectionNavigateButton />
      <SectionArrowButton />
    </SelectSectionBox>
  );
}
