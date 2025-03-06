import { getImageUrl } from '@utils/getImageUrl';
import * as S from './styles';
import { COSMETIC_COMPONENTS } from '@/features/store/constants';
import { CosmeticItem } from '@/features/store/types';

interface MyCharacterProps {
  equippedItems: CosmeticItem[];
}

export default function MyCharacter({ equippedItems }: MyCharacterProps) {
  const equippedItemMap = equippedItems.reduce<{ [key: number]: string }>(
    (prev, item) => {
      prev[item.subCategoryId] = item.image;
      return prev;
    },
    {}
  );

  const renderEquippedItems = () => {
    if (equippedItemMap) {
      return Object.entries(COSMETIC_COMPONENTS).map(([key, Component]) => {
        const item = equippedItemMap[Number(key)];
        return item && <Component key={key} src={getImageUrl(item)} />;
      });
    }
  };

  const characterColorImage = equippedItemMap[8]
    ? `${equippedItemMap[8].slice(0, 2)}-코코.svg`
    : '파랑-코코.svg';

  return (
    <S.MyCharacterBox>
      <S.CharacterEquipContainer>
        {<S.MyCharacterImage src={getImageUrl(characterColorImage)} />}
        {renderEquippedItems()}
      </S.CharacterEquipContainer>
    </S.MyCharacterBox>
  );
}
