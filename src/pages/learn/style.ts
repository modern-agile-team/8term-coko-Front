import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  width: 1280px;
  grid-template-columns: 2fr 7fr 3fr;
  column-gap: 20px;
`;

export const AlignCenter = styled.div`
  display: flex;
  justify-content: center;
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
