import { useUserHpQuery } from '@/features/user/queries';
import { isLoggedIn } from '@/features/user/service/authUtils';
import useUserStore from '@/store/useUserStore';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

type useHpUpdate = (isCorrect: boolean) => void;
export const useHpUpdate: useHpUpdate = isCorrect => {
  const { mutate: hpUpdate } = useUserHpQuery.updateHp();
  const { data: userHp } = useUserHpQuery.getHpWhenLoggedIn();
  const { user } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (Number(userHp?.hp) === 0) {
      toast('목숨이 다 소진되었습니다.');
      navigate('/');
    }

    if (isCorrect === undefined) return;

    if (isCorrect) return;

    if (isLoggedIn(user) && userHp) {
      hpUpdate({
        hp: Number(userHp.hp) - 1,
        hpStorage: userHp.hpStorage,
      });
    }
  }, [isCorrect]);
};
