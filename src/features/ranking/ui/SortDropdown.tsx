import * as S from './styles';
import usePopover from '@hooks/usePopover';
import { RANKING_OPTIONS } from '@features/ranking/constant';
import { objectKeys } from '@modern-kit/utils';

interface SortDropDownProps {
  selectedOption: keyof typeof RANKING_OPTIONS;
  onSelectOption: (option: keyof typeof RANKING_OPTIONS) => void;
}

export default function SortDropdown({
  selectedOption,
  onSelectOption,
}: SortDropDownProps) {
  const { isOpen, togglePopover, popoverRef } = usePopover();

  const handleOptionClick = (option: keyof typeof RANKING_OPTIONS) => {
    onSelectOption(option);
    togglePopover();
  };

  // 정렬 옵션 목록을 동적으로 생성
  const SORT_OPTIONS = objectKeys(RANKING_OPTIONS);

  return (
    <S.SortContainer ref={popoverRef}>
      <S.SortSelectButton onClick={togglePopover} $isToggled={isOpen}>
        {selectedOption}
      </S.SortSelectButton>
      {isOpen && (
        <S.SortOptionUl>
          {SORT_OPTIONS.map(option => (
            <S.SortOptionLi
              key={option}
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
