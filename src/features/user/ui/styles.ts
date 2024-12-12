import { styled } from 'styled-components';
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
`;
