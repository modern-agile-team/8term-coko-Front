import { styled } from 'styled-components';

export const EmphasizedItemDiv = styled.div`
  position: absolute;
  display: flex;
  > p {
    position: absolute;
    top: 55%;
    left: 40%;
    z-index: 101;
  }
  > img {
    position: relative;
    z-index: 100;
  }
`;
export const TutorialOverRayDiv = styled.div`
  top: -60px;
  left: 150px;
  width: 130px;
  height: 130px;
  background: transparent;
  border-radius: 50%;
  box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0.8);
  position: absolute;
  z-index: 5;
`;
