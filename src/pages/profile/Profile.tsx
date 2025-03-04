import * as globalS from '@style/styles';
import MenuBar from '@common/layout/MenuBar';
import Header from '@common/layout/Header';
import useUserStore from '@store/useUserStore';
import LevelBar from '@features/profile/ui/LevelBar';
import ProfileDetails from '@features/profile/ui/ProfileDetails';
import useCycleProgress from '@hooks/useCycleProgress';

export default function Profile() {
  const { user } = useUserStore();
  const userLevel = user?.level || 1;
  const cycleLength = 60;

  const { steps, progress } = useCycleProgress({
    value: userLevel,
    cycleLength,
    step: 10,
  });

  return (
    <>
      <globalS.Wrapper>
        <globalS.LeftSection>
          <MenuBar />
        </globalS.LeftSection>

        <globalS.RightSection>
          <Header />
          <LevelBar userLevel={userLevel} steps={steps} progress={progress} />
        </globalS.RightSection>
      </globalS.Wrapper>

      <globalS.Layout>
        <ProfileDetails />
      </globalS.Layout>
    </>
  );
}
