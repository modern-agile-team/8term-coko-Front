import { getImageUrl } from '@utils/getImageUrl';

import * as S from './styles';
import { useUserCosmeticItemsQuery } from '@/features/user/queries';
import { SkeletonBase } from '@/common/layout/styles';

//백엔드 내가 입은 아이템 api 나오면 COSMETIC_COMPONENTS로 수정
const characterEquipMapping = {
  1: S.CharacterSetup,
  2: S.CharacterShoes,
  3: S.CharacterHat,
  4: S.CharacterGlasses,
  5: S.CharacterBeard,
  8: S.MyCharacterImage,
} as const;

export default function MyCharacter() {
  const { data: userEquippedItems } =
    useUserCosmeticItemsQuery.getEquippedItem();

  if (!userEquippedItems) {
    return <SkeletonBase />;
  }

  const renderEquipItems = () =>
    userEquippedItems.map(item => {
      if (!item.subCategoryId) {
        return null;
      }
      const EquipComponent =
        characterEquipMapping[
          item.subCategoryId as keyof typeof characterEquipMapping
        ];
      if (!EquipComponent) return null;

      return (
        <EquipComponent
          key={item.subCategoryId}
          src={
            item.subCategoryId === 8
              ? getImageUrl(`${item.image.slice(0, 2)}-코코.svg`)
              : getImageUrl(item.image)
          }
        />
      );
    });

  return (
    <S.MyCharacterBox>
      <S.CharacterEquipContainer>
        {renderEquipItems()}
      </S.CharacterEquipContainer>
    </S.MyCharacterBox>
  );
}
