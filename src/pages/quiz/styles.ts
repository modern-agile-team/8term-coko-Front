import styled from 'styled-components';

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
