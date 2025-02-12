import { getImageUrl } from '@/utils/getImageUrl';
import * as S from '@/features/user/ui/styles';
import PreviewMyCharacter from '@/features/store/ui/PreviewMyCharacter';
export default function PreViewProfileImage() {
  return (
    <>
      <S.ProfileBorderBox $isIcon={false}>
        <img src={getImageUrl('해초의-습격.svg')} />
        <S.ProfileBox $isIcon={false}>
          <PreviewMyCharacter />
        </S.ProfileBox>
      </S.ProfileBorderBox>
    </>
  );
}
