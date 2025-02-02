import {
  GoToMainLink,
  NotFoundDescription,
  NotFoundHeading,
  NotFoundImage,
  NotFoundWrapper,
} from '@/features/error/ui/styles';
import { getImageUrl } from '@/utils/getImageUrl';

export default function NotFound() {
  return (
    <NotFoundWrapper>
      <NotFoundHeading>
        여기가 어디야? 아무래도 길을 잃어버렸나봐 ! 
      </NotFoundHeading>
      <NotFoundImage src={getImageUrl('404이미지.webp')} />
      <NotFoundDescription>
        죄송합니다. 페이지를 찾을 수 없습니다. <br />
        존재하지 않는 주소를 입력하셨거나 요청하신 페이지의 주소가 변경,
        삭제되어 찾을 수 없습니다.
      </NotFoundDescription>
      <GoToMainLink to="/learn">메인으로</GoToMainLink>
    </NotFoundWrapper>
  );
}
