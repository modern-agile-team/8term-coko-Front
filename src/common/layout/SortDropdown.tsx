import * as S from './styles';
import usePopover from '@hooks/usePopover';
import { objectKeys } from '@modern-kit/utils';

/**
 * @template T
 * @param {T} options - 드롭다운에 표시될 옵션 객체. 키는 라벨로 사용되며 값은 관련 데이터를 나타냅니다.
 * @param {keyof T} selectedOption - 현재 선택된 옵션.
 * @param {(option: keyof T) => void} onSelectOption - 옵션 선택 시 호출되는 콜백 함수.
 */
interface SortDropDownProps<T> {
  options: T;
  selectedOption: keyof T;
  onSelectOption: (option: keyof T) => void;
}

/**
 * @description 정렬할 때 사용할 수 있는 드롭다운 컴포넌트입니다.
 *
 * @example
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
 * function ExampleComponent() {
 *   const [selectedOption, setSelectedOption] = useState<keyof typeof RANKING_OPTIONS>('포인트 보유순');
 *
 *   return (
 *     <SortDropdown
 *       options={RANKING_OPTIONS}
 *       selectedOption={selectedOption}
 *       onSelectOption={setSelectedOption}
 *     />
 *   );
 * }
 */
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
