import styled from 'styled-components';
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
//푸터 영역잡기
export const TotalResultsSection = styled.section`
  grid-column: 3;
`;
