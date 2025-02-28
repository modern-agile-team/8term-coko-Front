import Select from '@/features/intro/ui/Select';
import {
  CLOTHES_OPTIONS,
  ACCESSORIES_OPTIONS,
  BUTTON_LIST,
} from '@/features/store/constants';
import { useCosmeticItemStore } from '@/features/store/store';
import { CosmeticItemOption } from '@/features/store/types';
import {
  FilterButton,
  FilterListContainer,
  SelectWrapper,
} from '@/pages/store/styles';
import { useState } from 'react';

export default function SortBar() {
  const { query, setQuery, setCurrentPage } = useCosmeticItemStore();
  const [buttonLabel, setButtonLabel] = useState('전체');

  const handleFilter = (query: CosmeticItemOption['query']) => {
    setCurrentPage(1);
    setQuery(query);
  };

  const handleSelect = ({
    value,
    label,
  }: {
    value: CosmeticItemOption['query'];
    label: string;
  }) => {
    setCurrentPage(1);
    setButtonLabel(label);
    setQuery(value);
  };
  return (
    <FilterListContainer>
      <FilterButton
        $isSelect={query.mainCategoryId === 0}
        onClick={() => handleFilter({ mainCategoryId: 0, subCategoryId: 0 })}
      >
        전체
      </FilterButton>
      <SelectWrapper $isSelect={query.mainCategoryId === 1}>
        <Select
          buttonName={
            CLOTHES_OPTIONS.some(value => value.label === buttonLabel)
              ? buttonLabel
              : '의상'
          }
          onChange={value => {
            const [subId, label] = value.split(',');
            handleSelect({
              value: {
                mainCategoryId: 1,
                subCategoryId: Number(subId),
              },
              label,
            });
          }}
        >
          {CLOTHES_OPTIONS.map(item => (
            <Select.Option
              key={item.label}
              value={`${item.query.subCategoryId},${item.label}`}
              label={item.label}
            />
          ))}
        </Select>
      </SelectWrapper>
      <SelectWrapper $isSelect={query.mainCategoryId === 2}>
        <Select
          buttonName={
            ACCESSORIES_OPTIONS.some(value => value.label === buttonLabel)
              ? buttonLabel
              : '액세서리'
          }
          onChange={value => {
            const [subId, label] = value.split(',');
            handleSelect({
              value: {
                mainCategoryId: 2,
                subCategoryId: Number(subId),
              },
              label,
            });
          }}
        >
          {ACCESSORIES_OPTIONS.map(item => (
            <Select.Option
              key={item.label}
              value={`${item.query.subCategoryId},${item.label}`}
              label={item.label}
            />
          ))}
        </Select>
      </SelectWrapper>
      {BUTTON_LIST.map(item => (
        <FilterButton
          key={item.label}
          onClick={() => handleFilter(item.query)}
          $isSelect={query.mainCategoryId === item.query.mainCategoryId}
        >
          {item.label}
        </FilterButton>
      ))}
    </FilterListContainer>
  );
}
