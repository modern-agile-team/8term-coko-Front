import { getLastDayOfMonth } from '@/features/user/service/utils';
import { AttendanceCalendarBoard } from '@/features/user/ui/styles';
import { getImageUrl } from '@/utils/getImageUrl';
import { useMemo } from 'react';

export default function AttendanceCalendar() {
  const days = useMemo(() => {
    const lastDay = getLastDayOfMonth();
    return Array.from({ length: lastDay }, (_, i) => i + 1);
  }, []);

  return (
    <AttendanceCalendarBoard>
      {days.map(day => (
        <span key={day}>{day}</span>
      ))}
      <img src={getImageUrl('달력아래.svg')} />
    </AttendanceCalendarBoard>
  );
}
