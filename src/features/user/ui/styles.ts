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
  width: 171px;
  height: 138px;
  position: absolute;
  z-index: 1;
`;

export const MyCharacterBox = styled.div`
  position: relative;
  width: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemImageHead = styled.img`
  position: absolute;
  z-index: 10;
  top: -20px;
`;

export const ItemImageBody = styled.img`
  position: absolute;
  z-index: 10;
  top: 70px;
  right: 19px;
`;

export const ItemImageAccessori = styled.img`
  position: absolute;
  z-index: 20;
  top: 18px;
  right: 17px;
`;

export const ProfileBox = styled.span<{ $isIcon: boolean }>`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%; /* 동그란 모양 만들기 */
  overflow: hidden; /* 동그라미 영역 밖은 잘라내기 */
  background-color: #f0f0f0; /* 배경색 설정 */
  > div {
    transform: translateX(-15px) translateY(5px) scale(1.6);
  }
  ${({ $isIcon }) =>
    $isIcon &&
    css`
      width: 30px; /* 프로필 이미지의 가로 크기 */
      height: 30px; /* 프로필 이미지의 세로 크기 */
      > div {
        transform: translateX(-70px) scale(0.35);
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
    transform: scale(1.6);
  }
  ${({ $isIcon }) =>
    $isIcon &&
    css`
      width: 30px;
      height: 30px;
      > img:first-child {
        position: absolute;
        z-index: 20;
        transform: scale(0.35);
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
`;

export const AttendanceCalendarWrapper = styled.div`
  position:ab > img {
    width: 100%;
    height: 100%;
  }
`;
