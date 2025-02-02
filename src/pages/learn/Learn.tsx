import withSections from '@features/learn/hocs/withSections';
import withUserProgress from '@features/learn/hocs/withUserProgress';
import LearnContainer from '@features/learn/ui/LearnContainer';

export default function Learn() {
  const LearnWithData = withUserProgress(withSections(LearnContainer));

  return <LearnWithData />;
}
