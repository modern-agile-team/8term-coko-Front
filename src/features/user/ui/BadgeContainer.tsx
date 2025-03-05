import * as S from './styles';
import { getImageUrl } from '@/utils/getImageUrl';
import type { ChallengeItem } from '@/features/quest/types';

// const testBadgeList = [
//   {
//     id: 1,
//     badgeImage: '테스트뱃지.webp',
//     badgeTitle: '왕',
//   },
//   {
//     id: 2,
//     badgeImage: '테스트뱃지.webp',
//     badgeTitle: '왕왕',
//   },
//   {
//     id: 3,
//     badgeImage: '테스트뱃지.webp',
//     badgeTitle: '왕대대',
//   },
//   {
//     id: 4,
//     badgeImage: '테스트뱃지.webp',
//     badgeTitle: '왕대대왕',
//   },
// ];

interface BadgeContainerProps {
  completedChallenges: ChallengeItem[];
}

export default function BadgeContainer({
  completedChallenges,
}: BadgeContainerProps) {
  return (
    <>
      <S.BadgeWrapper>
        <S.PaginationButton>
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

        <S.PaginationButton>
          <S.PaginationIcon
            src={getImageUrl('뱃지-다음버튼.svg')}
            $rotate="180deg"
          />
        </S.PaginationButton>
      </S.BadgeWrapper>
    </>
  );
}
