import { getImageUrl } from '@/utils/getImageUrl';

export default function ProfileImage() {
  return (
    <>
      <img src={getImageUrl('테스트프로필.svg')}></img>
    </>
  );
}
