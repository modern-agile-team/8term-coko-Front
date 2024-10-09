import { Link } from 'react-router-dom';
import styled from 'styled-components';
import type { InputBoxStyle, LabelStyle } from './types/style';
export const AlignCenter = styled.div`
  display: flex;
  justify-content: center;
`;
export const LayOut = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: column;
`;
export const StyleLink = styled(Link)`
  color: #000000;
  display: block;
  text-decoration: none;
  width: 300px;
  height: 70px;
  font-size: 24px;
  text-align: center;
  align-content: center;
  background-color: lightgray;
  border: 2px solid #000000;
`;
export const Label = styled.label<LabelStyle>`
  margin-left: ${({ $marginLeft }) => $marginLeft || '30px'};
  font-size: 18px;
`;
export const SelectBox = styled.select`
  margin: 20px;
  font-size: 18px;
  width: 400px;
  height: 30px;
`;
export const InputBox = styled.textarea<InputBoxStyle>`
  width: 500px;
  margin: 20px;
  height: ${({ $height }) => $height || '40px'};
  resize: none;
`;
