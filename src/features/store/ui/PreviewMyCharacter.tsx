import { getImageUrl } from '@utils/getImageUrl';
import { useCosmeticItemStore } from '@/features/store/useCosmeticItemStore';
import * as S from '@/features/user/ui/styles';

export default function PreviewMyCharacter() {
  const { equippedCosmeticItems } = useCosmeticItemStore();

  return (
    <>
      <S.MyCharacterBox>
        {equippedCosmeticItems[8] ? (
          <S.MyCharacterImage
            src={getImageUrl(
              `${equippedCosmeticItems[8].image.slice(0, 2)}-코코.svg`
            )}
          />
        ) : (
          <S.MyCharacterImage src={getImageUrl('벗은코코.svg')} />
        )}
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
