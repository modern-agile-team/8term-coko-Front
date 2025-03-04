import * as globalS from '@style/styles';
import MenuBar from '@common/layout/MenuBar';
import Header from '@common/layout/Header';
import useUserStore from '@store/useUserStore';
import LevelBar from '@features/profile/ui/LevelBar';
import ProfileDetails from '@features/profile/ui/ProfileDetails';
import useCycleProgress from '@hooks/useCycleProgress';
import { useUserProgressQuery } from '@features/user/queries';

export default function Profile() {
  const { user } = useUserStore();
  const userLevel = user?.level || 1;
  const userName = user?.name || '사용자 이름 (로그인 필요)';
  const userJoinDate = user?.createdAt || '2025.01.01.';
  const userTotalAttendance = user?.totalAttendance || 1;

  const cycleLength = 60;

  const { steps, progress } = useCycleProgress({
    value: userLevel,
    cycleLength,
    step: 10,
  });

  const { data: progressData } = useUserProgressQuery.getProgress();

  const currentProgress = progressData?.correctUserProgressCount || 0;
  const maxProgress = progressData?.totalQuizCount || 1;
  const solvedCount = progressData?.totalUserProgressCount || 0;
  const incorrectCount = progressData?.inCorrectUserProgressCount || 0;
  const unsolvedCount =
    (progressData?.totalQuizCount || 0) -
    (progressData?.totalUserProgressCount || 0);

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
        <ProfileDetails
          userName={userName}
          userJoinDate={userJoinDate}
          userTotalAttendance={userTotalAttendance}
          currentProgress={currentProgress}
          maxProgress={maxProgress}
          solvedCount={solvedCount}
          incorrectCount={incorrectCount}
          unsolvedCount={unsolvedCount}
        />
      </globalS.Layout>
    </>
  );
}
