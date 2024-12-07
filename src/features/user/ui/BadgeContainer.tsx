import {
  BadgeListItem,
  BadgeWrapper,
  PaginationButton,
  PaginationIcon,
} from '../styles';
import { getImageUrl } from '@/utils/getImageUrl';

const testBadgeList = [
  {
    id: 1,
    badgeImage: '테스트뱃지.webp',
    badgeTitle: '왕',
  },
  {
    id: 2,
    badgeImage: '테스트뱃지.webp',
    badgeTitle: '왕왕',
  },
  {
    id: 3,
    badgeImage: '테스트뱃지.webp',
    badgeTitle: '왕대대',
  },
  {
    id: 4,
    badgeImage: '테스트뱃지.webp',
    badgeTitle: '왕대대왕',
  },
];
export default function BadgeContainer() {
  return (
    <>
      <BadgeWrapper>
        <PaginationButton>
          <PaginationIcon src={getImageUrl('뱃지-다음버튼.svg')} />
        </PaginationButton>
        <ul>
          {testBadgeList.map(badgeItem => (
            <BadgeListItem key={badgeItem.id}>
              <div>
                <img src={getImageUrl(badgeItem.badgeImage)} />
              </div>
              <h5>{badgeItem.badgeTitle}</h5>
            </BadgeListItem>
          ))}
        </ul>
        <PaginationButton>
          <PaginationIcon
            src={getImageUrl('뱃지-다음버튼.svg')}
            $rotate="180deg"
          />
        </PaginationButton>
      </BadgeWrapper>
    </>
  );
}
