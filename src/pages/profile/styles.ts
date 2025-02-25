import { styled } from 'styled-components';
import { MEDIA } from '@/style/constants';

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

  > div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  ${MEDIA.mobile} {
    width: calc(100% - 60px);
    height: auto;
    flex-direction: column;
    margin-top: 120px;
  }
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

  ${MEDIA.mobile} {
    display: none;
  }
`;

export const MyProgressDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%; /* 기존 width: 383px 대신 유동적인 크기 */
  max-width: 383px; /* 최대 크기 제한 */
  min-width: 250px; /* 너무 작아지는 것 방지 */
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
    gap: 20px;
    text-align: center;
    font-size: 12px;
    font-weight: 700;
    line-height: 24px;
    white-space: nowrap;
    width: 90%;
  }

  ${MEDIA.mobile} {
    margin-left: 0;
    width: 90%;
    max-width: 300px;
    height: auto;
    background: none;
    border: none;
    padding: 10px 0 20px 0;
    z-index: 30;

    > p:nth-child(1) {
      top: -300px;
    }

    > img {
      top: -330px;
    }

    > div {
      width: 100%;
      max-width: 270px;
    }
  }
`;

export const MyQuizInfoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  border-radius: 8px;
  background: #cbd2a1;
  width: 90%;
  max-width: 363px;
  height: 37px;
  color: #9f9f9f;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  padding: 0 10px;

  span {
    color: #85705f;
  }

  ${MEDIA.mobile} {
    width: 100%;
  }
`;
export const UserNameLabel = styled.label`
  text-align: center;
  border-radius: 15px;
  border: 2px solid #f09900;
  background: #ffb53d;
  color: #fff;
  padding: 3px 16px 3px 16px;
  z-index: 30px;
  font-size: 16px;
  margin-top: 20px;
  font-weight: 700;
`;

export const JoinDateLabel = styled.label`
  display: block;
  color: #cbcbcb;
  margin-top: 5px;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  text-transform: lowercase;
`;

export const BadgeSection = styled.section`
  height: 306px;
  width: 50vw;
  margin-top: 21px;
  background-color: #ffff;
  border-radius: 20px;
  box-shadow: 0 3px #e5e5e5;

  ${MEDIA.mobile} {
    position: relative;
    width: calc(100% - 60px);
    height: auto;
    padding-bottom: 30px;
    margin-bottom: 100px;
  }
`;

export const BadgeLabel = styled.label`
  display: block;
  text-align: center;
  border-radius: 15px;
  width: 209px;
  border: 2px solid #f09900;
  background: #ffb53d;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  text-transform: lowercase;
  margin: 27px auto 0 40px;

  ${MEDIA.mobile} {
    margin: 27px auto 0 auto;
  }
`;

export const LevelList = styled.ol`
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

export const LevelLabel = styled.label`
  display: block;
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
  line-height: 24px;
  letter-spacing: 0.2px;
`;

export const MyCharacterImage = styled.img`
  width: 115px;
  height: 92px;
  margin: 0 0 10px 10px;
`;
