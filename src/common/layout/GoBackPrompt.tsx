import {
  FlexContainer,
  PromptContainer,
  PromptMessage,
  ButtonContainer,
  GoBackPromptImg,
  ConfirmButton,
  CancelButton,
} from './styles';

import { getImageUrl } from '@/utils/getImageUrl';

interface GoBackPromptProps {
  onConfirm: () => void; // 뒤로 가기 동작
  onCancel: () => void; // 모달 닫기
}

export default function GoBackPrompt({
  onConfirm,
  onCancel,
}: GoBackPromptProps) {
  return (
    <FlexContainer>
      <PromptContainer>
        <PromptMessage>
          <h2>뒤로 가시겠습니까?</h2>
          <p>진행 중인 내용이 사라질 수 있습니다.</p>
        </PromptMessage>
        <GoBackPromptImg src={getImageUrl('우는-코코.svg')} />
        <ButtonContainer>
          <CancelButton onClick={onCancel}>계속하기</CancelButton>
          <ConfirmButton onClick={onConfirm}>뒤로가기</ConfirmButton>
        </ButtonContainer>
      </PromptContainer>
    </FlexContainer>
  );
}
