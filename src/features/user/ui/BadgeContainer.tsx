import * as S from './styles';
import { getImageUrl } from '@/utils/getImageUrl';
import type { ChallengeItem } from '@/features/quest/types';
import { Dispatch, SetStateAction } from 'react';

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
