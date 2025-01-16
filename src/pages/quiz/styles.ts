import { media } from '@/style/media';
import styled, { css } from 'styled-components';

//가운데 정렬
export const AlignCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

//그리드 나누기용 width는 나중에 글로벌스타일 들어오면 지우기
export const GridContainer = styled.div`
  display: grid;
  width: 1280px;
  grid-template-columns: 98px 98px 764px 98px 98px;
  column-gap: 20px;
`;
//헤더 영역잡기용
export const HeaderSection = styled.section`
  width: 294px;
  align-self: flex-end;
  height: 42px;
`;
//진행도 영역잡기용 나중에 진행도 컴포넌트 분리되면 지우기
export const ProgressSection = styled.section`
  width: 60vw;
  height: 23px;
  border-radius: 8px;
  border: 2px solid #00b6c0;
  background: #00d9e9;
  ${media.mobile} {
    width: 85vw;
  }
`;
//응답버튼 영역잡기
export const SubmitSection = styled.section`
  display: flex;
  width: 60vw;
  align-items: center;
  justify-content: space-between;
  margin-top: 48px;

  ${media.mobile} {
    width: 85vw;
  }
`;
//응답 버튼
export const ResponseButton = styled.button<{ $disabled?: boolean }>`
  width: 130px;
  height: 40px;
  border: 2px solid #ffe8c7;
  gap: 6px;
  border-radius: 24px;
  font-size: 18px;
  line-height: 24px;
  background-color: #f0d8a7;
  color: #ffffff;
  ${({ $disabled }) =>
    $disabled &&
    css`
      background-color: #f0d8a7;
      border-color: #ffe8c7;
      color: #e6e6e6;
    `}
`;
