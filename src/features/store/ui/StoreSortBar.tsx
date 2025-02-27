import { CosmeticItemOption } from '@/features/store/types';
import { StoreSortDropDown } from '@/features/store/ui/styles';
import { FilterButton } from '@/pages/store/styles';
import { useCosmeticItemStore } from '@/features/store/store';
import { useOutsidePointerDown, useToggle } from '@modern-kit/react';
import { useEffect, useState } from 'react';

interface StoreSortBarProps {
  items: CosmeticItemOption[];
}

export default function StoreSortBar({ items }: StoreSortBarProps) {
  const [isOpen, toggleIsOpen] = useToggle();
  const dropDownRef = useOutsidePointerDown<HTMLUListElement>(toggleIsOpen);
  const [currentLabel, setCurrentLabel] = useState<string | null>(null);
  const { query, setQuery, setCurrentPage } = useCosmeticItemStore();

  const handleItemClick = (item: CosmeticItemOption) => {
    setCurrentPage(1);
    setQuery(item.query);
    setCurrentLabel(item.label);
    toggleIsOpen();
  };

  useEffect(() => {
    if (items[0].query.mainCategoryId !== query.mainCategoryId) {
      setCurrentLabel(null);
    }
  }, [query]);

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
    <FilterButton
      $isSelect={items[0].query.mainCategoryId === query.mainCategoryId}
      onClick={toggleIsOpen}
    >
      {currentLabel || items[0].label} ▲
    </FilterButton>
  );
}
