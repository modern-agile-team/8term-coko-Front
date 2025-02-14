import { getImageUrl } from '@/utils/getImageUrl';
import * as S from '@/features/user/ui/styles';
import PreviewMyCharacter from '@/features/store/ui/PreviewMyCharacter';
import { useCosmeticItemStore } from '@/features/store/useCosmeticItemStore';

export default function PreViewProfileImage() {
  const { equippedCosmeticItems } = useCosmeticItemStore();

  return (
    <>
      <S.ProfileBorderBox $isIcon={false}>
        {equippedCosmeticItems['7'] && (
          <img src={getImageUrl(equippedCosmeticItems['7'].image)} />
        )}
        <S.ProfileBox $isIcon={false}>
          <PreviewMyCharacter />
        </S.ProfileBox>
      </S.ProfileBorderBox>
    </>
  );
}
