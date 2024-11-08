import styled, { css } from 'styled-components';
//그리드 나누기용 width는 나중에 글로벌스타일 들어오면 지우기

export const GridContainer = styled.div`
  display: grid;
  width: 1280px;
  grid-template-columns: 98px 98px 764px 98px 98px;
  column-gap: 20px;
`;
//헤더 영역잡기용 나중에 헤더 생기면 지우기
export const HeaderSection = styled.section`
  display: flex;
  font-weight: 1000;
  justify-content: space-between;
  background-color: gray;
  height: 42px;
`;
//진행도 영역잡기용 나중에 진행도 컴포넌트 분리되면 지우기
export const ProgressSection = styled.section`
  width: 921px;
  height: 23px;
  border-radius: 8px;
  border: 2px solid #00b6c0;
  background: #00d9e9;
`;
//응답버튼 영역잡기
export const SubmitSection = styled.section`
  display: flex;
  width: 60vw;
  align-items: center;
  justify-content: space-between;
  margin-top: 48px;
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
