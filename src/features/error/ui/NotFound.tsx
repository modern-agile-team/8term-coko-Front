import {
  NotFoundWrapper,
  MobileVisibleTitle,
  NotFoundDescription,
  NotFoundHeading,
  NotFoundImage,
  GoToMainLink,
} from '@/features/error/ui/styles';
import { getImageUrl } from '@utils/getImageUrl';
import { getImageNameFromUrl } from '@utils/getImageNameFromUrl';
import { useMediaQuery } from '@modern-kit/react';
import { MEDIA_QUERY_MAP } from '@style/constants';

export default function NotFound() {
  const isMobile = useMediaQuery(MEDIA_QUERY_MAP.mobile);
  const notFoundImg = isMobile ? '404이미지-모바일.svg' : '404이미지.webp';

  return (
    <NotFoundWrapper>
      <MobileVisibleTitle>404</MobileVisibleTitle>
      <NotFoundHeading>
        여기가 어디야? 아무래도 길을 잃어버렸나봐 !
      </NotFoundHeading>
      <NotFoundImage
        src={getImageUrl(notFoundImg)}
        alt={getImageNameFromUrl(notFoundImg)}
      />
      <NotFoundDescription>
        죄송합니다. 페이지를 찾을 수 없습니다. <br />
        존재하지 않는 주소를 입력하셨거나 요청하신 페이지의 주소가 변경,
        삭제되어 찾을 수 없습니다.
      </NotFoundDescription>
      <GoToMainLink to="/learn">메인으로</GoToMainLink>
    </NotFoundWrapper>
  );
}
