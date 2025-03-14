import * as S from './styles';
import AuthRequiredNotice from '@/features/profile/ui/AuthRequiredNotice';
import { useState } from 'react';
import { getImageUrl } from '@/utils/getImageUrl';
import { usersChallengesQuery } from '@/features/user/queries';
import useUserStore from '@store/useUserStore';
import { useMediaQuery } from '@modern-kit/react';
import { MEDIA_QUERY_MAP } from '@style/constants';
import { isLoggedIn } from '@features/user/service/authUtils';

export default function BadgeContainer() {
  const [page, setPage] = useState(1);
  const { user } = useUserStore();
  const isMobile = useMediaQuery(MEDIA_QUERY_MAP.mobile);
  const limit = isMobile ? 1 : 4;

  if (!isLoggedIn(user)) {
    return (
      <AuthRequiredNotice
        title="로그인이 필요합니다."
        description="뱃지를 보려면 먼저 로그인해주세요."
        linkTo="/login"
        linkText="로그인하기"
      />
    );
  }

  const { data: challengesData } = usersChallengesQuery.useGetChallenges({
    page,
    limit,
    completed: true,
  });

  const completedChallenges = challengesData?.contents || [];
  const totalPage = challengesData?.totalPage ?? 1;

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < totalPage) setPage(page + 1);
  };

  return (
    <S.BadgeWrapper>
      {completedChallenges.length > 0 && (
        <S.PaginationButton
          onClick={handlePrevPage}
          disabled={page <= 1}
          $isHidden={page === 1}
        >
          <S.PaginationIcon src={getImageUrl('뱃지-다음버튼.svg')} />
        </S.PaginationButton>
      )}

      {completedChallenges.length > 0 ? (
        <ul>
          {completedChallenges.map(item => (
            <S.BadgeListItem key={item.id}>
              <span>
                <img
                  src={getImageUrl(`뱃지-${item.challenge.badgeName}.svg`)}
                  alt={item.challenge.content}
                />
              </span>
              <h5>{item.challenge.content}</h5>
            </S.BadgeListItem>
          ))}
        </ul>
      ) : (
        <AuthRequiredNotice
          title="아직 획득한 뱃지가 없습니다."
          description="도전과제를 완료하고 다양한 뱃지를 모아보세요!"
          linkTo="/quest"
          linkText="도전과제 보러가기"
        />
      )}

      {completedChallenges.length > 0 && (
        <S.PaginationButton
          onClick={handleNextPage}
          disabled={page >= totalPage}
          $isHidden={page === totalPage}
        >
          <S.PaginationIcon
            src={getImageUrl('뱃지-다음버튼.svg')}
            $rotate="180deg"
          />
        </S.PaginationButton>
      )}
    </S.BadgeWrapper>
  );
}
