import * as S from './styles';
import { getImageUrl } from '@/utils/getImageUrl';
import { isLoggedIn } from '@/features/user/service/authUtils';
import ProgressBar from '@features/progress/ui/ProgressBar';

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
  return (
    <S.LevelDiv>
      <div>
        <S.MyCharacterImage
          src={getImageUrl('테스트캐릭터.svg')}
          alt="캐릭터 이미지"
        />
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
