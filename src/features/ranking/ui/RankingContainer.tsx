import * as S from './styles';

export default function RankingContainer() {
  const dummyUsers = [
    {
      id: 2,
      nickname: 'gwgw2',
      profileImage: null,
      level: 4,
      point: 200,
    },
    {
      id: 3,
      nickname: 'gwgwgw3',
      profileImage: null,
      level: 2,
      point: 5000,
    },
    {
      id: 4,
      nickname: 'gwgwgwgw4',
      profileImage: null,
      level: 3,
      point: 160,
    },
    {
      id: 5,
      nickname: 'gwgwgwgwgw5',
      profileImage: null,
      level: 10,
      point: 190,
    },
  ];

  return (
    <S.RankingContainer>
      {dummyUsers.map((user, index) => (
        <S.RankingItem key={user.id} $rank={index + 1}>
          <div>{user.nickname}</div>
          <div>{user.level}</div>
          <div>{user.point}</div>
        </S.RankingItem>
      ))}
    </S.RankingContainer>
  );
}
