import * as S from './styles';
import { getImageUrl } from '@/utils/getImageUrl';
import type { ChallengeItem } from '@features/user/types';
import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';

interface BadgeContainerProps {
  completedChallenges: ChallengeItem[];
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  totalPage: number;
}

export default function BadgeContainer({
  completedChallenges,
  page,
  setPage,
  totalPage,
}: BadgeContainerProps) {
  const navigate = useNavigate();

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPage) {
      setPage(page + 1);
    }
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
          <S.GoToQuestButton onClick={() => navigate('/quest')}>
            도전과제 보러가기
          </S.GoToQuestButton>
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
