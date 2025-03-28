import { useClientQuizStore } from '@/features/quiz/stores';
import { useUserHpQuery } from '@/features/user/queries';
import { isLoggedIn } from '@/features/user/service/authUtils';
import useUserStore from '@/store/useUserStore';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

type useHpUpdate = (isCorrect: boolean | undefined) => void;
export const useHpUpdate: useHpUpdate = isCorrect => {
  const { mutate: hpUpdate } = useUserHpQuery.updateHp();
  const { user } = useUserStore();

  useEffect(() => {
    if (isCorrect === undefined) return;
    if (isCorrect) return;

    if (isLoggedIn(user)) {
      hpUpdate();
    }
  }, [isCorrect]);
};

export const useCheckHp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentPage, isCorrectList } = useClientQuizStore();
  const { data: userHp } = useUserHpQuery.getHp();

  useEffect(() => {
    if (userHp && location.pathname.includes('quiz') && userHp?.hp <= 0) {
      toast.error('생명력이 소진되었어요!');

      navigate('/learn');
    }
  }, [location.pathname, navigate, currentPage, isCorrectList]);
};
