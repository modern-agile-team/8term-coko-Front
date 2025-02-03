import { FC, useMemo } from 'react';
import { isLoggedIn } from '@features/user/service/authUtils';
import { useSectionPaginationQuery } from '@features/learn/queries';
import useUserStore from '@store/useUserStore';
import { flatMap } from '@modern-kit/utils';
import type { Section } from '@features/learn/types';

export interface WithSectionsInjectedProps {
  sections: Section[];
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
}

// 타입에서 HOC 주입 props를 제거하는 헬퍼 타입
type SubtractInjectedProps<P, Injected> = Omit<P, keyof Injected>;

// HOC: 섹션 목록 + 무한스크롤 로직을 주입
export default function withSections<P extends WithSectionsInjectedProps>(
  WrappedComponent: FC<P>
): FC<SubtractInjectedProps<P, WithSectionsInjectedProps>> {
  const ComponentWithSections: FC<
    SubtractInjectedProps<P, WithSectionsInjectedProps>
  > = props => {
    const { user } = useUserStore();

    // 로그인 상태에 따라 섹션 쿼리 선택
    const {
      data,
      fetchNextPage,
      hasNextPage = false,
      isFetchingNextPage,
    } = isLoggedIn(user)
      ? useSectionPaginationQuery.getUserSectionsByPage()
      : useSectionPaginationQuery.getSectionsByPage();

    // 섹션 데이터 추출
    const sections = useMemo(() => {
      return flatMap(data?.pages ?? [], page => page.sections || [], 1);
    }, [data]);

    return (
      <WrappedComponent
        {...(props as P)}
        sections={sections}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    );
  };

  return ComponentWithSections;
}
