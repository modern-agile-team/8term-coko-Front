import { getImageUrl } from '@utils/getImageUrl';
import { MyCharacterImage } from './styles';
import * as S from './styles';
import { useCosmeticItemStore } from '@/store/useCosmeticItemStore';

export default function MyCharacter() {
  const { equippedCosmeticItems } = useCosmeticItemStore();

  return (
    <>
      <S.MyCharacterBox>
        <MyCharacterImage src={getImageUrl('벗은코코.svg')} />
        <S.CharacterEquipContainer>
          {equippedCosmeticItems[3] && (
            <S.CharacterHat src={getImageUrl(equippedCosmeticItems[3].image)} />
          )}
          {equippedCosmeticItems[4] && (
            <S.CharacterGlasses
              src={getImageUrl(equippedCosmeticItems[4].image)}
            />
          )}
          {equippedCosmeticItems[5] && (
            <S.CharacterBeard
              src={getImageUrl(equippedCosmeticItems[5].image)}
            />
          )}
          {equippedCosmeticItems[1] && (
            <S.CharacterSetup
              src={getImageUrl(equippedCosmeticItems[1].image)}
            />
          )}
          {equippedCosmeticItems[2] && (
            <S.CharacterShoes
              src={getImageUrl(equippedCosmeticItems[2].image)}
            />
          )}
        </S.CharacterEquipContainer>
      </S.MyCharacterBox>
    </>
  );
}
