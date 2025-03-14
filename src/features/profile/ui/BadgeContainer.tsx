import * as S from './styles';
import { useState } from 'react';
import { getImageUrl } from '@/utils/getImageUrl';
import { usersChallengesQuery } from '@/features/user/queries';
import useUserStore from '@store/useUserStore';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@modern-kit/react';
import { MEDIA_QUERY_MAP } from '@style/constants';
import { isLoggedIn } from '@features/user/service/authUtils';

export default function BadgeContainer() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const { user } = useUserStore();
  const loggedIn = isLoggedIn(user);

  const isMobile = useMediaQuery(MEDIA_QUERY_MAP.mobile);
  const limit = isMobile ? 1 : 4;

  if (!loggedIn) {
    return (
      <S.BadgeWrapper>
        <S.EmptyBadgeContainer>
          <p>로그인이 필요합니다.</p>
          <S.BadgeGuideText>
            뱃지를 보려면 먼저 로그인해주세요.
          </S.BadgeGuideText>
          <button onClick={() => navigate('/login')}>로그인하기</button>
        </S.EmptyBadgeContainer>
      </S.BadgeWrapper>
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
      <S.PaginationButton
        onClick={handlePrevPage}
        disabled={page <= 1}
        $isHidden={page === 1}
      >
        <S.PaginationIcon src={getImageUrl('뱃지-다음버튼.svg')} />
      </S.PaginationButton>

      {completedChallenges.length > 0 ? (
        <ul>
          {completedChallenges.map(item => (
            <S.BadgeListItem key={item.id}>
              <div>
                <img
                  src={getImageUrl(`뱃지-${item.challenge.badgeName}.svg`)}
                  alt={item.challenge.content}
                />
              </div>
              <h5>{item.challenge.content}</h5>
            </S.BadgeListItem>
          ))}
        </ul>
      ) : (
        <S.EmptyBadgeContainer>
          <p>아직 획득한 뱃지가 없습니다.</p>
          <S.BadgeGuideText>
            도전과제를 완료하고 다양한 뱃지를 모아보세요!
          </S.BadgeGuideText>
          <button onClick={() => navigate('/quest')}>도전과제 보러가기</button>
        </S.EmptyBadgeContainer>
      )}

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
    </S.BadgeWrapper>
  );
}
