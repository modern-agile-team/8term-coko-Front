import { getImageUrl } from '@utils/getImageUrl';
import { MyCharacterImage } from './styles';
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
};

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
          src={getImageUrl(item.image)}
        />
      );
    });

  return (
    <S.MyCharacterBox>
      <MyCharacterImage src={getImageUrl('벗은코코.svg')} />
      <S.CharacterEquipContainer>
        {renderEquipItems()}
      </S.CharacterEquipContainer>
    </S.MyCharacterBox>
  );
}
