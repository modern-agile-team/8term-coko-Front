import { getImageUrl } from '@/utils/getImageUrl';
import * as S from '@/features/user/ui/styles';
import PreviewMyCharacter from '@/features/store/ui/PreviewMyCharacter';
import { useCosmeticItemStore } from '@/features/store/store';

export default function PreViewProfileImage() {
  const { equippedCosmeticItems } = useCosmeticItemStore();

  return (
    <>
      <S.ProfileBorderBox $size="lg">
        {equippedCosmeticItems['7'] && (
          <img src={getImageUrl(equippedCosmeticItems['7'].image)} />
        )}
        <S.ProfileBox $size="lg">
          <PreviewMyCharacter />
        </S.ProfileBox>
      </S.ProfileBorderBox>
    </>
  );
}
