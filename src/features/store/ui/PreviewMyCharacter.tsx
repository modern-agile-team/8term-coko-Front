import { getImageUrl } from '@utils/getImageUrl';
import { useCosmeticItemStore } from '@/features/store/store';
import * as S from '@/features/user/ui/styles';
import { COSMETIC_COMPONENTS } from '@/features/store/constants';

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
          {Object.entries(COSMETIC_COMPONENTS).map(([key, Component]) => {
            const item = equippedCosmeticItems[Number(key)];
            return (
              item && <Component key={key} src={getImageUrl(item.image)} />
            );
          })}
        </S.CharacterEquipContainer>
      </S.MyCharacterBox>
    </>
  );
}
