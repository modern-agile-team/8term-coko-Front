import { getImageUrl } from '@utils/getImageUrl';

import * as S from './styles';
import { useUserCosmeticItemsQuery } from '@/features/user/queries';
import { SkeletonBase } from '@/common/layout/styles';
import { FastOmit, IStyledComponentBase } from 'styled-components/dist/types';

const characterEquipMapping: Record<
  number,
  IStyledComponentBase<
    'web',
    FastOmit<
      React.DetailedHTMLProps<
        React.ImgHTMLAttributes<HTMLImageElement>,
        HTMLImageElement
      >,
      never
    >
  >
> = {
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
      const EquipComponent = characterEquipMapping[item.subCategoryId];
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
