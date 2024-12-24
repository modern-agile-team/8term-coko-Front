import { getImageUrl } from '@/utils/getImageUrl';
import * as S from './styles';
import MyCharacter from '@/features/user/ui/MyCharacter';
export default function ProfileImage({ isIcon }: { isIcon: boolean }) {
  //기능 제작 시 자기 캐릭터에서 프로필이미지 추출하는 로직 추가
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
