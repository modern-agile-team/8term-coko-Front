import { Quiz } from '@/features/quiz/types';
import { animations } from '@/style/animations';
import styled, { css } from 'styled-components';
export const IntroWrapper = styled.div`
  overflow-x: hidden;

  * {
    font-family: 'Wanted Sans';
  }

  h1 {
    font-size: 50px;
    font-style: normal;
    font-weight: 900;
    line-height: 60px;
  }

  h2 {
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 60px;
  }

  h3 {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 60px;
  }

  h4 {
    font-family: 'goorm Sans OTF';
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 10px;
  }
`;
export const IntroHeader = styled.header`
  width: 100vw;
  height: 79px;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 0 52px 0 61px;
  justify-content: space-between;
  box-shadow: 0px 4px #e5e5e5;
  > img {
    width: 65px;
    height: 52px;
  }
  > div {
    display: flex;
    gap: 40px;

    > button {
      color: #00d9e9;
      text-align: center;
      font-family: 'goorm Sans OTF';
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px; /* 200% */
      letter-spacing: 0.16px;
      border: none;
      background-color: inherit;
    }
    > button:nth-child(2) {
      color: #000;
    }
  }
`;

export const TopCokoIntroWrapper = styled.div`
  position: relative;
  margin-top: 4px;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background: #00edff;
  display: flex;
  justify-content: space-between;
  padding-top: 100px;

  > div:nth-child(2) {
    flex: 1;
    > img {
      animation: ${animations.float} 5s ease-in-out infinite;
      position: absolute;
      width: 984px;
      height: 600px;
    }
  }
`;
export const CokoIntroLeftDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    > h1,
    h2 {
      color: #fff;
      font-family: 'Wanted Sans';
      line-height: 60px;
    }
    > h1 {
      font-size: 50px;
    }
    > h2 {
      margin-top: 19px;
      font-size: 40px;
    }

    > button,
    a {
      width: 326px;
      height: 50px;
      flex-shrink: 0;
      border: none;
      border-radius: 20px;
      background: #fff;
      box-shadow: 0 3px #e5e5e5;
      color: #000;
      text-align: center;
      font-size: 20px;
      font-weight: 400;
      line-height: 50px;
      margin-top: 73px;
      text-decoration: none;
    }
    > button,
    a:nth-child(4) {
      background: #00d9e9;
      box-shadow: 0 3px #00b6c0;
      margin-top: 22px;
    }
  }
`;

export const GradientCokoIntroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, #00edff, #ffffff 80%);
  text-align: center;
  color: #fff;
`;

export const QuizIntroWrapper = styled.section`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 133px;
`;

export const QuizIntroButtonList = styled.div`
  width: 100vw;
  display: flex;
  gap: 51px;
  justify-content: center;
  background-color: #fff;
  padding: 50px 0;
`;

export const CategoryButton = styled.button<{ $isActive: boolean }>`
  width: 224px;
  height: 49px;
  color: #000;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 50px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 4px #e5e5e5;
  border: none;
  ${({ $isActive }) =>
    $isActive &&
    css`
      color: #fff;
      background: #00d9e9;
      box-shadow: 0 4px #00b6c0;
    `}
`;

export const IntroFooterWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, #ffffff 0%, #00edff 120%);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding-bottom: 5%;
  > hr {
    width: 80%;
    background: #fff;
    height: 1px;
    border: none;
  }
`;

export const IntroFooter = styled.footer`
  width: 80%;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  > img {
    width: 29px;
    height: 29px;
    flex-shrink: 0;
  }
`;
export const TeamIntroWrapper = styled.div`
  display: flex;
  gap: 86px;

  > div {
    display: flex;
    flex-direction: column;
    color: #fff;
    li {
      margin-top: 20px;
      font-size: 12px;
      list-style: none;
    }
  }
`;

export const ProfileIntroWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    height: 247px;
  }
`;

export const BottomCokoIntroWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  display: flex;
  align-items: center;
  gap: 100px;

  > div {
    display: flex;
    justify-content: flex-end;
    flex: 1;
    > img {
      width: 361.335px;
      height: 340.748px;
      flex-shrink: 0;
    }
  }

  > div:nth-child(2) {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    > div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 39px;
      > p {
        color: #00dbe8;
        text-align: right;
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: 40px;
      }
      > a {
        border-radius: 20px;
        background: #00d9e9;
        border: none;
        width: 290px;
        height: 44px;
        box-shadow: 0 3px #00b6c0;
        color: #fff;
        text-align: center;
        font-family: 'goorm Sans OTF';
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 50px; /* 250% */
        text-decoration: none;
      }
    }
  }
`;
