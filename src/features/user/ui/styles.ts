import { MEDIA, ANIMATIONS } from '@style/constants';
import { getImageUrl } from '@/utils/getImageUrl';
import { css, styled } from 'styled-components';

export const BadgeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
  margin-top: 39px;

  > ul {
    display: flex;
    gap: 20px;
  }

  ${MEDIA.mobile} {
    gap: 25px;
    > ul {
      display: flex;
      justify-content: center;

      > li:not(:first-child) {
        display: none;
      }
    }
  }
`;
export const PaginationIcon = styled.img<{ $rotate?: string }>`
  width: 9px;
  height: 20px;
  transform: rotate(${({ $rotate }) => $rotate || 0});

  ${MEDIA.mobile} {
    width: 20px;
    height: 20px;
  }
`;
export const PaginationButton = styled.button`
  background: none;
  border: none;
`;
export const BadgeListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 11px;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 133px;
    height: 141px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 2px solid #ffe161;
    background: #ffefaa;
  }
  > h5 {
    border-radius: 8px;
    border: 2px solid #ffefaa;
    background: #ffe161;
    color: #fff;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    text-transform: lowercase;
  }

  ${MEDIA.mobile} {
    > div {
      width: 160px;
      height: 165px;
    }
  }
`;

export const MyCharacterImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
`;

export const MyCharacterBox = styled.div`
  position: relative;
  width: 171px;
  height: 138px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CharacterEquipContainer = styled.div`
  position: relative;
  display: flex;
  width: 171px;
  height: 138px;
`;

export const CharacterHat = styled.img`
  position: absolute;
  object-fit: contain;
  z-index: 30;
  left: 26px;
  top: -22px;
`;

export const CharacterGlasses = styled.img`
  position: absolute;
  object-fit: contain;
  top: 18px;
  z-index: 30;
  left: 28px;
`;

export const CharacterBeard = styled.img`
  top: 30px;
`;

export const CharacterSetup = styled.img`
  position: absolute;
  object-fit: contain;
  left: 26px;
  z-index: 30;
  top: 72px;
`;

export const CharacterShoes = styled.img`
  position: absolute;
  object-fit: contain;
  left: 26px;
  z-index: 20;
  top: 120px;
`;

export const ProfileBox = styled.span<{ $isIcon: boolean }>`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%; /* 동그란 모양 만들기 */
  overflow: hidden;
  background-color: #f0f0f0;
  > div {
    transform: translateX(-15px) translateY(50px) scale(1.6);
  }
  ${({ $isIcon }) =>
    $isIcon &&
    css`
      width: 30px;
      height: 30px;
      > div {
        transform: translateX(-70px) translateY(-50px) scale(0.35);
      }
    `}
`;
export const ProfileBorderBox = styled.div<{ $isIcon: boolean }>`
  width: 150px;
  height: 150px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  > img:first-child {
    position: absolute;
    z-index: 20;
    transform: scale(1.3);
  }

  ${({ $isIcon }) =>
    $isIcon &&
    css`
      width: 30px;
      height: 30px;
      > img:first-child {
        position: absolute;
        z-index: 20;
        transform: scale(0.25);
      }
    `}
`;

export const AttendanceCheckButton = styled.button`
  border: none;
  background-color: inherit;
  display: flex;

  > img {
    width: 24px;
    height: 24px;
  }

  ${MEDIA.mobile} {
    position: fixed;
    left: 30px;
    bottom: 100px;

    > img {
      width: 36px;
      height: 36px;
    }
  }
`;

export const AttendanceCalendarBoard = styled.div`
  position: relative;
  height: 520px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  padding: 5px 5px 0;
  column-gap: 4px;
  background-image: url(${getImageUrl('달력아래.svg')});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ${MEDIA.mobile} {
    padding: 2px 3px 0 3px;
    height: 200px;
    gap: 5px;
  }
`;

export const AttendanceStamp = styled.img<{ $isTodayAttendance: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  ${({ $isTodayAttendance }) =>
    $isTodayAttendance &&
    css`
      animation: ${ANIMATIONS.slamDown} 0.7s ease-out;
    `}
`;

export const AttendanceDayCell = styled.span`
  color: #b57400;
  font-weight: 700;
  font-size: 14px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  z-index: 1000;

  > p {
    position: absolute;
    padding: 5px 5px 0 0;
  }
  > img {
    position: relative;
    width: 100%;
    height: 100%;
  }

  ${MEDIA.mobile} {
    font-size: 10px;
  }
`;

export const AttendanceCalendarWrapper = styled.div`
  position: relative;
  width: 700px;
  height: 600px;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  > h1 {
    position: absolute;
    left: 50%;
    top: 10px;
    transform: translateX(-50%);
    color: #fff;
    font-size: 28px;
    font-weight: 700;
  }
  > img {
    width: 700px;
    height: 67px;
  }

  ${MEDIA.mobile} {
    width: 280px;
    height: 230px;

    > h1 {
      font-size: 12px;
    }
    > img {
      width: 280px;
      height: 28px;
    }
  }
`;
export const SaveButton = styled.button`
  display: flex;
  width: 65px;
  height: 23px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 15px;
  border: 2px solid #f09900;
  background: #ffb53d;
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  align-self: center;
  margin: auto 0 10px 0;
`;

export const EquipButton = styled.button`
  display: flex;
  width: 100px;
  height: 20px;
  padding: 4px 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 2px solid #f09900;
  background: #ffb53d;
  color: var(--white, #fff);
  font-family: Maplestory;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.2px;

export const OpinionsButton = styled.button`
  min-width: 60px;
  background-color: #00edff;
  border-radius: 24px;
  border: 2px solid #00dce8;
  background: #70f5ff;
  padding: 2px 5px;
  color: #fff;
  &:hover {
    border-radius: 24px;
    border: 2px solid #00868d;
    background: #00d9e9;
  }
`;

export const OpinionsFormWrapper = styled.div`
  *,
  *::before,
  *::after {
    font-family: pretandard;
  }
  position: relative;
  width: 40vw;
  height: 75vh;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 40px;
  box-shadow: 0 5px #e5e5e5;

  > div {
    width: 80%;
    margin: 10px 0;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;
  }
  label {
    width: 20%;
    display: block;
    font-size: 14px;
    font-weight: bold;
    > span {
      color: red;
    }
  }
  textarea,
  input {
    width: 80%;
    height: 120px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    background-color: #f8f8f8;
    resize: none;

    &:focus {
      outline: none;
      border-color: #00e1ec;
    }
  }
  input {
    height: 40px;
  }
  > button {
    width: 80%;
    padding: 12px;
    background-color: #00e1ec;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    margin-top: 16px;
    box-shadow: 0 3px #00b6c0;

    &:hover {
      background-color: #00b6c0;
    }
  }

  ${MEDIA.mobile} {
    width: 90vw;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`;

export const ContentWrapper = styled.div<{ $isMaxLength: boolean }>`
  width: 80%;
  display: flex;
  flex-direction: column;
  > textarea {
    width: 100%;
  }
  > p {
    align-self: flex-end;
    color: #c8c8c8;
    ${({ $isMaxLength }) =>
      $isMaxLength &&
      css`
        > span {
          color: red;
        }
      `}
  }
`;
