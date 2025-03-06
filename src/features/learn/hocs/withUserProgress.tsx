import { FC, useState, useCallback } from 'react';
import { useUserProgressQuery } from '@features/user/queries';
import type { Part, Section } from '@features/learn/types';

interface WithUserProgressInjectedProps {
  progressData: {
    correctUserProgressCount: number;
    totalQuizCount: number;
  } | null;

  // 내부에서 partId, sectionId를 관리
  selectedPartId: Part['id'] | null;
  selectedSectionId: Section['id'] | null;
  onFetchProgress: (partId?: Part['id'], sectionId?: Section['id']) => void;
}

// HOC: 파트/섹션 진행도 로직 주입
export default function withUserProgress<P extends object>(
  WrappedComponent: FC<P & WithUserProgressInjectedProps>
) {
  const ComponentWithUserProgress: FC<P> = props => {
    // 어떤 Part/Section을 선택했는지 HOC 내부에서 state로 관리
    const [selectedPartId, setSelectedPartId] = useState<Part['id'] | null>(
      null
    );
    const [selectedSectionId, setSelectedSectionId] = useState<
      Section['id'] | null
    >(null);

    // 로그인된 경우에만 user(자신)와 progress의 관계 데이터를 가져오기
    const { data: progressData } = useUserProgressQuery.getProgress({
      partId: selectedPartId ?? undefined,
      sectionId: selectedSectionId ?? undefined,
    });

    // 선택된 partId/sectionId를 변경하는 함수
    const onFetchProgress = useCallback(
      (partId?: number, sectionId?: number) => {
        setSelectedPartId(partId ?? null);
        setSelectedSectionId(sectionId ?? null);
      },
      []
    );

    return (
      <WrappedComponent
        {...(props as P)}
        progressData={progressData ?? null}
        selectedPartId={selectedPartId}
        selectedSectionId={selectedSectionId}
        onFetchProgress={onFetchProgress}
      />
    );
  };

  return ComponentWithUserProgress;
}
