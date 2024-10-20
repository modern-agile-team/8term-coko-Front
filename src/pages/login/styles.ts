import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const FlexContainer = styled.section`
  width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LogoImageSection = styled.section`
  margin: 163px 0px 70px 0px;
  width: 372px;
  height: 82px;
  border: 2px dashed #f00;
  background: #efeff0;
`;
export const SocialLoginLink = styled(Link)`
  display: block;
  margin-bottom: 45px;
  width: 412px;
  height: 50px;
  color: black;
  text-decoration: none; // 밑줄 없애기
  border-radius: 4px;
  border: 2px solid #000;
  background: #fff;
`;
