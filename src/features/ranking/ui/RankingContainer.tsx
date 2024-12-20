import { useState, useEffect } from 'react';
import { getImageUrl } from '@/utils/getImageUrl';
import rankingOptions from '../service/rankingOptions';
import SortDropdown from './SortDropdown';
import MyRank from './MyRank';
import * as S from './styles';

interface RankingContainerProps {
  onMyRankChange: (rank: number) => void;
}

export default function RankingContainer({
  onMyRankChange,
}: RankingContainerProps) {
  const [selectedOption, setSelectedOption] = useState('포인트 보유순');

  // 현재 선택된 옵션의 데이터 가져오기
  const config = rankingOptions[selectedOption];

  const myRank = {
    rank: 4,
    nickname: 'gwgwgwgwgw5',
    level: 3,
    point: 160,
  };

  // 나의 순위를 부모 컴포넌트로 전달
  useEffect(() => {
    onMyRankChange(myRank.rank);
  }, [myRank.rank, onMyRankChange]);

  const dummyUsers = [
    {
      id: 2,
      nickname: 'gwgw2',
      level: 4,
      point: 200,
    },
    {
      id: 3,
      nickname: 'gwgwgw3',
      level: 2,
      point: 5000,
    },
    {
      id: 4,
      nickname: 'gwgwgwgw4',
      level: 3,
      point: 160,
    },
    {
      id: 5,
      nickname: 'gwgwgwgwgw5',
      level: 10,
      point: 190,
    },
    {
      id: 6,
      nickname: 'gwgwgwgwgwgw6',
      level: 12,
      point: 230,
    },
    {
      id: 7,
      nickname: 'gwgwgwgwgwgwgw7',
      level: 1,
      point: 3000,
    },
  ];

  return (
    <S.RankingContainer>
      {/* 나의 순위 */}
      <MyRank
        rank={myRank.rank}
        nickname={myRank.nickname}
        level={myRank.level}
        point={myRank.point}
        selectedOption={selectedOption}
      />
      {/* 정렬 드롭다운 */}
      <SortDropdown
        selectedOption={selectedOption}
        onSelectOption={setSelectedOption}
      />
      {/* 나머지 순위 */}
      {dummyUsers.map((user, index) => (
        <S.RankingItem key={user.id} $rank={index + 1}>
          <S.MedalContainer $rank={index + 1} />
          <S.RankText>{index + 1}</S.RankText>
          <S.ProfileWrapper>
            <S.ProfileOutline src={getImageUrl('테두리.svg')} />
            <S.ProfileImg src={getImageUrl('코코-프로필.svg')} />
          </S.ProfileWrapper>
          <S.UserInfo>
            <S.UserLevelText>LV.{user.level}</S.UserLevelText>
            <S.UserNameText>{user.nickname}</S.UserNameText>
          </S.UserInfo>
          <S.Container>
            <S.RankIconWrapper>
              <S.RankIcon src={getImageUrl(config.icon)} />
              <S.RankIconText>{user[config.dataField]}</S.RankIconText>
            </S.RankIconWrapper>
            <S.AddFriend>+ 친구 추가</S.AddFriend>
          </S.Container>
        </S.RankingItem>
      ))}
    </S.RankingContainer>
  );
}
