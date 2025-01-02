import * as S from './styles';
import usePopover from '@hooks/usePopover';
import { objectKeys } from '@modern-kit/utils';

interface SortDropDownProps<T> {
  options: T;
  selectedOption: keyof T;
  onSelectOption: (option: keyof T) => void;
}

export default function SortDropdown<T>({
  options,
  selectedOption,
  onSelectOption,
}: SortDropDownProps<T>) {
  const { isOpen, togglePopover, popoverRef } = usePopover();

  const handleOptionClick = (option: keyof T) => {
    onSelectOption(option);
    togglePopover();
  };

  const SORT_OPTIONS = objectKeys(options);

  return (
    <S.SortContainer ref={popoverRef}>
      <S.SortSelectButton onClick={togglePopover} $isToggled={isOpen}>
        {String(selectedOption)}
      </S.SortSelectButton>
      {isOpen && (
        <S.SortOptionUl>
          {SORT_OPTIONS.map(option => (
            <S.SortOptionLi
              key={String(option)}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </S.SortOptionLi>
          ))}
        </S.SortOptionUl>
      )}
    </S.SortContainer>
  );
}
