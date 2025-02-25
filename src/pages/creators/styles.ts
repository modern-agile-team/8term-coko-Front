import styled from 'styled-components';

export const CreatorsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
  justify-content: flex-start;
  width: 100%;
  height: 180vh;

  background: linear-gradient(to bottom, #00edff, #ffffff 95%);
  * {
    font-family: 'Wanted Sans';
    color: #00dbe8;
    text-align: center;
    font-style: normal;
    h1 {
      font-size: 50px;
      font-weight: 900;
      letter-spacing: 0.08px;
    }
    h2 {
      font-size: 30px;
      font-weight: 700;
    }
    h3 {
      font-size: 25px;
      font-weight: 600;
    }
    h4 {
      font-size: 20px;
      font-weight: 600;
      letter-spacing: 0.08px;
    }
    p {
      color: #000;
      font-size: 18px;
      font-weight: 600;
      line-height: 30px;
      white-space: pre-line;
    }
  }
`;

export const TeamButtonList = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  align-items: center;
  justify-content: center;
  gap: 99px;
  * {
    font-family: 'goorm Sans OTF';
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 50px;
  }
  > div {
    width: 235px;
    height: 49px;
  }
  button {
    border-radius: 20px;
    background: #fff;
    color: #000;
    border: none;
    box-shadow: 0 3px #e5e5e5;
    &:hover {
      background: #00d9e9;
      color: #fff;
      box-shadow: 0 3px #00b6c0;
    }
  }
  ul {
    text-align: center;
    box-shadow: 0 3px #00b6c0;
    border-radius: 20px;
    background: #00d9e9;
    display: flex;
    flex-direction: column;
  }
  li {
    color: #fff;
    width: 235px;
    height: 49px;
    &:hover {
      color: #00b6c0;
    }

    border-bottom: 2px solid #fff;
  }
  li:nth-last-child(1) {
    border: none;
  }
`;

export const MemberCardWrapper = styled.div`
  width: 960px;
  height: 530px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 7px #e5e5e5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MemberCard = styled.div`
  display: flex;
  width: 90%;

  gap: 53px;
  > img {
    width: 196px;
    height: 238px;
  }
  > div {
    gap: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    > hr {
      width: 547px;
      height: 1px;
      border: none;
      background-color: #00d9e9;
    }
    > div {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
    }
  }
`;

export const CoKoIntroWraper = styled.div`
  display: flex;
  gap: 89px;
  margin-top: 98px;

  > img {
    width: 240px;
    height: 210px;
  }
  > div {
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: flex-end;
    > button {
      width: 290px;
      height: 44px;
      flex-shrink: 0;
      border-radius: 20px;
      background: #00d9e9;
      box-shadow: 0 2px #00b6c0;
      border: none;
      font-size: 20px;
      color: #fff;
      margin-top: 20px;
    }
  }
`;
