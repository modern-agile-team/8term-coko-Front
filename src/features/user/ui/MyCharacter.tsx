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
  console.log(userEquippedItems);
  return (
    <S.MyCharacterBox>
      <S.CharacterEquipContainer>
        {myItemMap && (
          <S.MyCharacterImage
            src={getImageUrl(`${myItemMap[8].slice(0, 2)}-코코.svg`)}
          />
        )}
        {renderEquipItems()}
      </S.CharacterEquipContainer>
    </S.MyCharacterBox>
  );
}
