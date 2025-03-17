import { MEDIA, ANIMATIONS, Z_INDEX } from '@style/constants';
import { getImageUrl } from '@/utils/getImageUrl';
import { css, styled } from 'styled-components';
import { ProfileImageSize } from '@/features/store/types';

export const MyCharacterImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
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
  z-index: ${Z_INDEX.defaultCosmeticItem};
  left: 26px;
  top: -22px;
`;

export const CharacterGlasses = styled.img`
  position: absolute;
  object-fit: contain;
  top: 18px;
  z-index: ${Z_INDEX.defaultCosmeticItem};
  left: 28px;
`;

export const CharacterBeard = styled.img`
  top: 30px;
`;

export const CharacterSetup = styled.img`
  position: absolute;
  object-fit: contain;
  left: 26px;
  z-index: ${Z_INDEX.defaultCosmeticItem};
  top: 72px;
`;

export const CharacterShoes = styled.img`
  position: absolute;
  object-fit: contain;
  left: 26px;
  z-index: ${Z_INDEX.footwear};
  top: 120px;
`;

export const ProfileBox = styled.span<{ $size: ProfileImageSize }>`
  position: absolute;
  border-radius: 50%; /* 동그란 모양 만들기 */
  overflow: hidden;
  background-color: #f0f0f0;
  ${({ $size }) => {
    switch ($size) {
      case 'lg':
        return css`
          width: 150px;
          height: 150px;
        `;
      case 'md':
        return css`
          width: 65px;
          height: 65px;
        `;
      case 'sm':
        return css`
          width: 30px;
          height: 30px;
        `;
    }
  }}
`;

export const ProfileBorderBox = styled.div<{ $size: ProfileImageSize }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  > img:first-child {
    position: absolute;
    z-index: ${Z_INDEX.frame};
  }
  ${({ $size }) => {
    switch ($size) {
      case 'lg':
        return css`
          width: 150px;
          height: 150px;
          > span > div {
            transform: translateX(-15px) translateY(40px) scale(1.5);
          }
          > img:first-child {
            transform: scale(1.3);
          }
        `;
      case 'md':
        return css`
          width: 65px;
          height: 65px;
          > span > div {
            transform: translateX(-60px) translateY(-20px) scale(0.8);
          }
          > img:first-child {
            transform: scale(0.55);
          }
        `;
      case 'sm':
        return css`
          width: 30px;
          height: 30px;
          > span > div {
            transform: translateX(-70px) translateY(-45px) scale(0.35);
          }
          > img:first-child {
            transform: scale(0.25);
          }
        `;
    }
  }}
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
  z-index: ${Z_INDEX.AttendanceDayCell};

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

export const EquipButton = styled.button<{ $isEquipped: boolean }>`
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
  border: 2px solid
    ${({ $isEquipped }) => ($isEquipped ? '#A5ECF0' : '#f09900')};
  background: ${({ $isEquipped }) => ($isEquipped ? '#00D9E9' : '#ffb53d')};
  color: var(--white, #fff);
  font-family: Maplestory;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.2px;
`;

export const OpinionsButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  min-width: 75px;
  height: 22px;
  border-radius: 9px;
  background: #00e5ee;
  font-size: 12px;
  font-weight: 700;
  border: none;
  padding: 2px 5px;
  color: #fff;
  box-shadow: 0 2px #68fcff;

  &:hover {
    background: #00d9e9;
    box-shadow: 0 1px #68fcff;
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

export const SelectWrapper = styled.div`
  button,
  ul {
    width: 120px;
  }
  button {
    border-radius: 15px;
    height: 30px;
  }
  ul {
    border-radius: 15px;
    border: 1px solid #ddd;
    background-color: #f8f8f8;
  }
  li {
    border: none;
    border-radius: 15px;
    &:hover {
      background-color: gray;
    }
  }
`;
