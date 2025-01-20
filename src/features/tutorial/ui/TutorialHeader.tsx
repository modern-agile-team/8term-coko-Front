import { HeaderBox } from '@/common/layout/style';
import HeaderItem from '@/common/ui/HeaderItem';
import { ProfileWrapper } from '@/common/ui/style';
import ProfileImage from '@/features/user/ui/ProfileImage';
import { getImageUrl } from '@/utils/getImageUrl';

export default function TutorialHeader() {
  return (
    <HeaderBox>
      <>
        <HeaderItem
          icon={getImageUrl('포인트.svg')}
          point={1500}
          color={'#FFCD35'}
        />
        <HeaderItem
          icon={getImageUrl('과일바구니.svg')}
          point={5}
          color={'#FE0F0F'}
        />
      </>
      <ProfileWrapper>
        <ProfileImage isIcon={true} />
      </ProfileWrapper>
    </HeaderBox>
  );
}
