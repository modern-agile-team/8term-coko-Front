import styled from 'styled-components';

interface LegendKeycapMessageImgProps {
  $isVisible: boolean;
}

export const LegendKeycapMessageImg = styled.img<LegendKeycapMessageImgProps>`
  position: fixed;
  margin: 350px 50px 0 0;
  opacity: ${props => (props.$isVisible ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

export const HandsUpCokoImg = styled.img`
  position: fixed;
  margin-top: 500px;
`;
