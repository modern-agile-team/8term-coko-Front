import { getImageUrl } from '@utils/getImageUrl';
import * as S from './styles';
import { userCosmeticItemsQuery } from '@/features/user/queries';
import { COSMETIC_COMPONENTS } from '@/features/store/constants';

export default function MyCharacter() {
  const { data: userEquippedItems } =
    userCosmeticItemsQuery.useGetEquippedItem();

  const myItemMap = userEquippedItems?.reduce<{ [key: number]: string }>(
    (prev, item) => {
      prev[item.subCategoryId] = item.image;
      return prev;
    },
    {}
  );

  const renderEquipItems = () => {
    if (myItemMap) {
      return Object.entries(COSMETIC_COMPONENTS).map(([key, Component]) => {
        const item = myItemMap[Number(key)];
        return item && <Component key={key} src={getImageUrl(item)} />;
      });
    }
  };

  const colorImage = myItemMap[8]
    ? `${myItemMap[8].slice(0, 2)}-코코.svg`
    : '파랑-코코.svg';

  return (
    <S.MyCharacterBox>
      <S.CharacterEquipContainer>
        {<S.MyCharacterImage src={getImageUrl(colorImage)} />}
        {renderEquipItems()}
      </S.CharacterEquipContainer>
    </S.MyCharacterBox>
  );
}
