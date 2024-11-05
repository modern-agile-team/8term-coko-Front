import styled from 'styled-components';
const imgUrl = import.meta.env.VITE_IMG_BASE_URL;

export const SelectSectionBox = styled.section`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  place-items: center;
  width: 599px;
  height: 197px;
  margin-top: 77px;
  position: fixed;
  background-image: url(${imgUrl}글씨섬.svg);
`;

export const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 108px;
  margin-left: 16px;
  position: fixed;
`;

export const HeaderBox = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 294px;
  height: 42px;
  margin-top: 33px;
  position: fixed;
`;

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 193px;
  height: 41px;
  margin-top: 26px;
  margin-left: 16px;
  border: 1px solid;
  position: fixed;
`;
