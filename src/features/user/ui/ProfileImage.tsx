import { getImageUrl } from '@/utils/getImageUrl';
import * as S from './styles';
import MyCharacter from '@/features/user/ui/MyCharacter';
export default function ProfileImage({ isIcon }: { isIcon: boolean }) {
  return (
    <>
      <S.ProfileBorderBox $isIcon={isIcon}>
        <img src={getImageUrl('해초의-습격.svg')} />
        <S.ProfileBox $isIcon={isIcon}>
          <MyCharacter />
        </S.ProfileBox>
      </S.ProfileBorderBox>
    </>
  );
}
