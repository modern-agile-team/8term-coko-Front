import { getImageUrl } from '@utils/getImageUrl';
import { MyCharacterImage } from './styles';
import * as S from './styles';
import { useCosmeticItemStore } from '@/store/useCosmeticItemStore';
export default function MyCharacter() {
  const { equippedItems } = useCosmeticItemStore();

  return (
    <>
      <S.MyCharacterBox>
        <MyCharacterImage src={getImageUrl('벗은코코.svg')} />
        <S.CharacterEquipContainer>
          {equippedItems[3] && (
            <S.CharacterHat src={getImageUrl(equippedItems[3].image)} />
          )}
          {equippedItems[4] && (
            <S.CharacterGlasses src={getImageUrl(equippedItems[4].image)} />
          )}
          {equippedItems[5] && (
            <S.CharacterGlasses src={getImageUrl(equippedItems[5].image)} />
          )}
          {equippedItems[1] && (
            <S.CharacterSetup src={getImageUrl('해적-의상.svg')} />
          )}
          {equippedItems[2] && (
            <S.CharacterShoes src={getImageUrl(equippedItems[2].image)} />
          )}
        </S.CharacterEquipContainer>
      </S.MyCharacterBox>
    </>
  );
}
