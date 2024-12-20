import usePopover from '@/hooks/usePopover';
import rankingOptions from '../service/rankingOptions';
import * as S from './styles';

interface SortDropDownProps {
  selectedOption: string;
  onSelectOption: (option: string) => void;
}

export default function SortDropdown({
  selectedOption,
  onSelectOption,
}: SortDropDownProps) {
  const { isOpen, togglePopover, popoverRef } = usePopover();

  const handleOptionClick = (option: string) => {
    onSelectOption(option);
    togglePopover();
  };

  // 정렬 옵션 목록을 동적으로 생성
  const SORT_OPTIONS = Object.keys(rankingOptions);

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
