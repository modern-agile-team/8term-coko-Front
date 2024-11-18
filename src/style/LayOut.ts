import styled from 'styled-components';
import { LayOut } from '../types/LayOut';
//아래 코드는 구역을 나누기 위한 것 일 뿐이니 나중에 지워도 됩니다
export const GridContainer = styled.div`
  display: grid;
  width: 1280px;
  grid-template-columns: 2fr 7fr 3fr;
  column-gap: 20px;
`;
export const AlignCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LayOutDiv = styled.div<LayOut>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ $marginTop }) => $marginTop || '0px'};
  height: ${({ $height }) => $height};
  background-color: ${({ $backGroundColor }) => $backGroundColor || '#fffff'};
`;
export const FeatureDiv = styled.div<LayOut>`
  width: ${({ $width }) => $width || '0px'};
  height: ${({ $height }) => $height || '0px'};
  margin-top: ${({ $marginTop }) => $marginTop || '0px'};
  background-color: ${({ $backGroundColor }) => $backGroundColor || 'gray'};
  border: solid 1px;
  border-radius: 8px;
`;
