import { useUserHpQuery } from '@/features/user/queries';
import { isLoggedIn } from '@/features/user/service/authUtils';
import useUserStore from '@/store/useUserStore';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

type useHpUpdate = (isCorrect: boolean | undefined) => void;
export const useHpUpdate: useHpUpdate = isCorrect => {
  const { mutate: hpUpdate, data: userHp } = useUserHpQuery.updateHp();
  const { user } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (userHp?.hp === 0) {
      toast.error('생명력이 소진되었어요!');
      navigate('/learn');
    }
    if (isCorrect === undefined) return;
    if (isCorrect) return;

    if (isLoggedIn(user)) {
      hpUpdate();
    }
  }, [isCorrect]);
};
