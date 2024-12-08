import { getImageUrl } from '@/utils/getImageUrl';

export default function ProfileImage() {
  //기능 제작 시 자기 캐릭터에서 프로필이미지 추출하는 로직 추가
  return (
    <>
      <img src={getImageUrl('테스트프로필.svg')} />
    </>
  );
}
