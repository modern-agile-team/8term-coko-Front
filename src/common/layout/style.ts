import styled from 'styled-components';

export const SelectSectionBox = styled.section`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  place-items: center;
  width: 666px;
  height: 105px;
  margin-top: 25px;
  border: 1px solid;
`;

export const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;
`;

export const HeaderBox = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 294px;
  height: 42px;
  margin-top: 42px;
`;
