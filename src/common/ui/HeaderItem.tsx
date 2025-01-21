import { getImageNameFromUrl } from '@/utils/getImageNameFromUrl';
import { IconWrapper, HeaderIcon } from './styles';
import { useElementRect } from '@/features/tutorial/service/hooks';

interface HeaderItemProps {
  icon: string;
  point: number;
  color: string;
}

export default function HeaderItem({ icon, point, color }: HeaderItemProps) {
  const { getClientRectRefCallback } = useElementRect();

  return (
    <>
      <IconWrapper
        $color={color}
        id={`header-item-${getImageNameFromUrl(icon)}`}
        ref={getClientRectRefCallback}
      >
        <HeaderIcon src={icon} />
        <p>{point.toLocaleString()}</p>
      </IconWrapper>
    </>
  );
}
