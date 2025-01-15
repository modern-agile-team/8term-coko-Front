import * as S from './styles';
import usePopover from '@hooks/usePopover';
import { objectKeys } from '@modern-kit/utils';

/**
 * @template T
 * @param {T} options - 드롭다운에 표시될 옵션 객체. 키는 라벨로 사용되며 값은 관련 데이터를 나타냅니다.
 * @param {keyof T} selectedOption - 현재 선택된 옵션.
 * @param {(option: keyof T) => void} onSelectOption - 옵션 선택 시 호출되는 콜백 함수.
 */
interface SortDropDownProps<T extends Record<PropertyKey, any>> {
  options: T;
  selectedOption: keyof T;
  onSelectOption: (option: keyof T) => void;
  width?: string; // 너비
  height?: string; // 높이
  iconSize?: string; // 아이콘 사이즈(화살표)
  iconRight?: string; // 아이콘 margin right
  fontSize?: string; // 글자 사이즈
  ulFontColor?: string; // ul 폰트 색
  liFontColor?: string; // li 폰트 색
  ulBackgroundColor?: string; // ul 배경 색
  liBackgroundColor?: string; // li 배경 색
  borderColor?: string; // 테두리 색상
}

/**
 * @description 정렬할 때 사용할 수 있는 드롭다운 컴포넌트입니다.
 *
 * @example
 * import { useState } from 'react';
 *
 * const RANKING_OPTIONS = {
 *   '포인트 보유순': {
 *     icon: '포인트.svg',
 *     dataField: 'point',
 *   },
 *   '레벨순': {
 *     icon: '레벨.svg',
 *     dataField: 'level',
 *   },
 * } as const;
 *
 * export default Ranking() {
 *   const [selectedOption, setSelectedOption] = useState<keyof typeof RANKING_OPTIONS>('포인트 보유순');
 *
 *   return (
 *     <SortDropdown
 *       options={RANKING_OPTIONS}
 *       selectedOption={selectedOption}
 *       onSelectOption={setSelectedOption}
 *       width="136px"
 *       height="30px"
 *       iconSize="10px"
 *       iconRight="15px"
 *       fontSize="12px"
 *       ulFontColor="#FFF3C0"
 *       liFontColor="#D37744"
 *       ulBackgroundColor="#d37744"
 *       liBackgroundColor="#fff3c0"
 *       borderColor="#c26b3b"
 *     />
 *   );
 * }
 */
export default function SortDropdown<T extends Record<PropertyKey, any>>({
  options,
  selectedOption,
  onSelectOption,
  width,
  height,
  iconSize,
  iconRight,
  fontSize,
  ulFontColor,
  liFontColor,
  ulBackgroundColor,
  liBackgroundColor,
  borderColor,
}: SortDropDownProps<T>) {
  const { isOpen, togglePopover, popoverRef } = usePopover();

  const handleOptionClick = (option: keyof T) => {
    onSelectOption(option);
    togglePopover();
  };

  const SORT_OPTIONS = objectKeys(options);

  return (
    <S.SortContainer ref={popoverRef}>
      <S.SortSelectButton
        onClick={togglePopover}
        $isToggled={isOpen}
        $width={width}
        $height={height}
        $iconSize={iconSize}
        $iconRight={iconRight}
        $color={ulFontColor}
        $fontSize={fontSize}
        $backgroundColor={ulBackgroundColor}
        $borderColor={borderColor}
      >
        {String(selectedOption)}
        <span>{'▲'}</span>
      </S.SortSelectButton>
      {isOpen && (
        <S.SortOptionUl
          $width={width}
          $height={height}
          $backgroundColor={ulBackgroundColor}
          $fontColor={ulFontColor}
          $borderColor={borderColor}
        >
          {SORT_OPTIONS.map(option => (
            <S.SortOptionLi
              key={String(option)}
              onClick={() => handleOptionClick(option)}
              $height={height}
              $color={liFontColor}
              $backgroundColor={liBackgroundColor}
              $borderColor={borderColor}
            >
              {option}
            </S.SortOptionLi>
          ))}
        </S.SortOptionUl>
      )}
    </S.SortContainer>
  );
}
