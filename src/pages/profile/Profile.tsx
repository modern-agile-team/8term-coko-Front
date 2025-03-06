import * as globalS from '@style/styles';
import MenuBar from '@common/layout/MenuBar';
import Header from '@common/layout/Header';
import LevelBar from '@features/profile/ui/LevelBar';
import ProfileDetails from '@features/profile/ui/ProfileDetails';
import { useState } from 'react';
import { useMediaQuery } from '@modern-kit/react';
import { MEDIA_QUERY_MAP } from '@style/constants';
import useUserStore from '@store/useUserStore';
import useCycleProgress from '@hooks/useCycleProgress';
import {
  useUserProgressQuery,
  useUserChallengesQuery,
} from '@features/user/queries';

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

  const [page, setPage] = useState(1);

  const isMobile = useMediaQuery(MEDIA_QUERY_MAP.mobile);
  const limit = isMobile ? 1 : 4;

  const { data: challengesData } = useUserChallengesQuery.getChallenges({
    page,
    limit,
    completed: true,
  });

  const completedChallenges = challengesData?.contents || [];
  const totalPage = challengesData?.totalPage ?? 1;
  const currentPage = challengesData?.currentPage ?? page;

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
          completedChallenges={completedChallenges}
          page={currentPage}
          setPage={setPage}
          totalPage={totalPage}
        />
      </globalS.Layout>
    </>
  );
}
