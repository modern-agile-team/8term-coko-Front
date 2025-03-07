import MyCharacter from '@/features/user/ui/MyCharacter';
import * as S from './styles';
import { getImageUrl } from '@/utils/getImageUrl';
import ProgressBar from '@features/progress/ui/ProgressBar';
import { userCosmeticItemsQuery } from '@/features/user/queries';
import { MyCharacterWrapper } from './styles';

interface LevelBarProps {
  userLevel: number;
  steps: number[];
  progress: number;
}

export default function LevelBar({
  userLevel,
  steps,
  progress,
}: LevelBarProps) {
  const { data: equippedItems } = userCosmeticItemsQuery.useGetEquippedItem();
  return (
    <S.LevelDiv>
      <div>
        <MyCharacterWrapper>
          <MyCharacter equippedItems={equippedItems} />
        </MyCharacterWrapper>
        <S.LevelLabel>Level.{userLevel}</S.LevelLabel>
      </div>

      <S.LevelList>
        {steps.map(stepValue => (
          <li key={stepValue}>
            <span>Level.{stepValue}</span> -
          </li>
        ))}
      </S.LevelList>

      <ProgressBar
        $progress={progress}
        $maxProgress={100}
        $height="20px"
        $innerBgColor="#FFD100"
        $boxBgColor="#FFEFAA"
        style={{
          width: '600px',
          position: 'absolute',
          transform: 'rotate(-90deg)',
          right: '-270px',
          top: '300px',
        }}
      />
    </S.LevelDiv>
  );
}
