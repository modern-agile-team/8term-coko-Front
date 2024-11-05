import styled from 'styled-components';

// 글로벌스타일 적용 시 삭제
export const BackgroundColor = styled.div`
  background-color: #fff8eb;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const RightSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
