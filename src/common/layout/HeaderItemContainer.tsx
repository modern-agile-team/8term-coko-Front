import HeaderItem from '@/common/ui/HeaderItem';
import { useUserHpQuery } from '@/features/user/queries';
import { User } from '@/features/user/types';
import AttendanceCalendarModal from '@/features/user/ui/AttendanceCalendarModal';
import { getImageUrl } from '@/utils/getImageUrl';

interface HeaderItemContainerProps {
  user: User;
}

export default function HeaderItemContainer({
  user,
}: HeaderItemContainerProps) {
  const { data: userHp } = useUserHpQuery.getHpWithSuspense();

  return (
    <>
      <AttendanceCalendarModal />
      <HeaderItem
        icon={getImageUrl('포인트.svg')}
        point={user.point}
        color={'#FFCD35'}
      />
      <HeaderItem
        icon={getImageUrl('과일바구니.svg')}
        point={userHp.hp}
        color={'#FE0F0F'}
      />
    </>
  );
}
