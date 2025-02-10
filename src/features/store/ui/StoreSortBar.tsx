import { CosmeticItemOption } from '@/features/store/types';
import { StoreSortDropDown } from '@/features/store/ui/styles';
import { FilterButton } from '@/pages/store/styles';
import { useOutsidePointerDown, useToggle } from '@modern-kit/react';
import { Dispatch, useEffect, useState } from 'react';

interface StoreSortBarProps {
  items: CosmeticItemOption[];
  shouldClearLabel: boolean;
  setItemQuery: Dispatch<React.SetStateAction<string>>;
}

export default function StoreSortBar({
  items,
  shouldClearLabel,
  setItemQuery,
}: StoreSortBarProps) {
  const [isOpen, toggleIsOpen] = useToggle();
  const dropDownRef = useOutsidePointerDown<HTMLUListElement>(toggleIsOpen);
  const [currentLabel, setCurrentLabel] = useState<string | null>(null);
  useEffect(() => {
    if (shouldClearLabel) {
      setCurrentLabel(null);
    }
  }, [shouldClearLabel]);

  const handleItemClick = (item: CosmeticItemOption) => {
    setCurrentLabel(item.label);
    setItemQuery(item.value);
    toggleIsOpen();
  };

  if (isOpen) {
    return (
      <StoreSortDropDown $isSelect={isOpen} ref={dropDownRef}>
        {items.map((item, index) => (
          <li key={item.label} onClick={() => handleItemClick(item)}>
            {item.label}
            {index === 0 && '  ▼'}
          </li>
        ))}
      </StoreSortDropDown>
    );
  }

  return (
    <FilterButton $isSelect={false} onClick={toggleIsOpen}>
      {currentLabel || items[0].label} ▲
    </FilterButton>
  );
}
