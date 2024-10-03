import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  width: 1156px;
  margin: 0 62px;
  grid-template-columns: 1fr 10fr 1fr;
`;
export const HeaderSection = styled.section`
  display: flex;
  grid-column: span 3;
  margin-top: 42px;
  justify-content: space-between;
  background-color: gray;
  height: 42px;
`;
export const ProgressSection = styled.section`
  grid-column: 2;
  background-color: red;
  text-align: center;
  margin-top: 34px;
`;
