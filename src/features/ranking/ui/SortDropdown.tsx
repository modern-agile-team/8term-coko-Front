import { useState } from 'react';
import usePopover from '@/hooks/usePopover';
import * as S from './styles';

export default function SortDropDown() {
  const { isOpen, togglePopover, popoverRef } = usePopover();
  const [selectedOption, setSelectedOption] = useState('포인트 보유순');

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    togglePopover();
  };

  return (
    <S.SortContainer ref={popoverRef}>
      <S.SortSelectButton onClick={togglePopover} $isToggled={isOpen}>
        {selectedOption}
      </S.SortSelectButton>
      {isOpen && (
        <S.SortOptionUl>
          <S.SortOptionLi onClick={() => handleOptionClick('포인트 보유순')}>
            포인트 보유순
          </S.SortOptionLi>
          <S.SortOptionLi onClick={() => handleOptionClick('레벨순')}>
            레벨순
          </S.SortOptionLi>
        </S.SortOptionUl>
      )}
    </S.SortContainer>
  );
}
