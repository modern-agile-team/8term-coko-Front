import { media } from '@/style/media';
import { getImageUrl } from '@/utils/getImageUrl';
import { css, styled } from 'styled-components';
export const BadgeWrapper = styled.div`
  display: flex;
  margin-top: 39px;
  width: 100%;
  gap: 12px;
  justify-content: space-between;
  padding: 0 17px;
  > ul {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
  }
`;
export const PaginationIcon = styled.img<{ $rotate?: string }>`
  width: 9px;
  height: 20px;
  transform: rotate(${({ $rotate }) => $rotate || 0});
`;
export const PaginationButton = styled.button`
  border: 0;
  background-color: transparent;
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
    line-height: 24px; /* 266.667% */
    text-transform: lowercase;
  }
`;
//추후에 canvas 태그 등으로 변경
export const MyCharacterImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
`;

export const MyCharacterBox = styled.div`
  position: relative;
  width: 170px;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CharacterEquipContainer = styled.div`
  width: 100%;
  display: flex;
  > img {
    position: absolute;
    object-fit: contain;
    z-index: 30;
  }
`;

export const CharacterHat = styled.img`
  left: 25px;
  top: -5px;
`;

export const CharacterGlasses = styled.img`
  left: 27px;
  top: 20px;
`;

export const CharacterBeard = styled.img`
  left: 25px;
  top: 30px;
`;

export const CharacterSetup = styled.img`
  left: 25px;
  top: 72px;
`;

export const CharacterShoes = styled.img`
  left: 25px;
  top: 125px;
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

  ${media.mobile} {
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

  > img {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  ${media.mobile} {
    padding: 2px 3px 0 3px;
    height: 200px;
    gap: 5px;
  }
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

  ${media.mobile} {
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

  ${media.mobile} {
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
`;
