import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  width: 100vw;
  grid-template-columns: 1fr 1fr 764px 1fr 1fr;
  column-gap: 20px;
`;
export const HeaderSection = styled.section`
  display: flex;
  grid-column: 2/5;
  margin-top: 42px;
  justify-content: space-between;
  background-color: gray;
  height: 42px;
`;
export const ProgressSection = styled.section`
  height: 21px;
  grid-column: 3;
  background-color: red;
  text-align: center;
  margin-top: 34px;
  border-radius: 2px;
  border: 1px solid #afb1b6;
`;
