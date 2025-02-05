import HeaderItem from '@/common/ui/HeaderItem';
import { useUserHpQuery } from '@/features/user/queries';
import { User } from '@/features/user/types';
import useUserStore from '@/store/useUserStore';
import { getImageUrl } from '@/utils/getImageUrl';

interface HeaderItemContainer {
  user: User;
}

export default function HeaderItemContainer({ user }: HeaderItemContainer) {
  const { data: userHp } = useUserHpQuery.getHp();

  return (
    <>
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
