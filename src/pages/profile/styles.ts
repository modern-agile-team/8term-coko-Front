import { styled } from 'styled-components';

export const ProfileSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  width: 50vw;
  height: 312px;
  background-color: #ffff;
  border-radius: 20px;
  box-shadow: 0 3px #e5e5e5;
`;
export const BadgeSection = styled.section`
  height: 306px;
  width: 50vw;
  margin-top: 21px;
  background-color: #ffff;
  border-radius: 20px;
  box-shadow: 0 3px #e5e5e5;
`;
export const LevelDiv = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  width: 249px;
  height: 629px;
  background-color: #ffff;
  border-radius: 20px;
  box-shadow: 0 3px #e5e5e5;
  margin: 68px 28px 0 0;
`;
export const MyProgressDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 350px;
  width: 383px;
  height: 198px;
  margin-left: 45px;
  padding-top: 80px;
  border-radius: 16px;
  justify-content: center;
  border: 2px solid #bfd683;
  background: #e3f3b8;
  > p:nth-child(1) {
    position: absolute;
    top: -6px;
    z-index: 10;
    font-size: 11px;
    color: #fff;
    > span {
      color: #bfd683;
      font-size: 13px;
    }
  }
  > img {
    position: absolute;
    top: -38px;
  }
  > div {
    display: flex;
    color: #9f9f9f;
    justify-content: space-around;
    gap: 20px;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 200% */
    text-transform: lowercase;
  }
`;
export const MyQuizInfoDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  border-radius: 8px;
  background: #cbd2a1;
  width: 362px;
  height: 37px;
  color: #9f9f9f;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 200% */
  text-transform: lowercase;
  span {
    color: #85705f;
  }
`;
export const UserNameLabel = styled.p`
  text-align: center;
  border-radius: 15px;
  border: 2px solid #f09900;
  background: #ffb53d;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
  text-transform: lowercase;
`;
export const JoinDateLabel = styled.p`
  color: #cbcbcb;
  margin-top: 5px;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 200% */
  text-transform: lowercase;
`;
export const BadgeLabel = styled.p`
  text-align: center;
  border-radius: 15px;
  width: 209px;
  border: 2px solid #f09900;
  background: #ffb53d;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
  text-transform: lowercase;
  margin: 27px auto 0 40px;
`;
export const LevelList = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 25px;
  top: 20px;
  left: 120px;
  list-style: none;
  color: #ffefaa;
  :nth-child(even) {
    text-align: right;
    font-weight: 700;
  }
  span {
    color: #ffb53d;
  }
`;
export const LevelLabel = styled.p`
  margin: 0 0 21px 70px;
  text-align: center;
  width: 117px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 1px solid #f09900;
  background: #ffb53d;
  color: #fff;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 160% */
  letter-spacing: 0.2px;
`;
export const MyCharacterImage = styled.img`
  width: 115px;
  height: 92px;
  margin: 0 0 10px 10px;
`;
