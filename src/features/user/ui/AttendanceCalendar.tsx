import { useUserAttendanceQuery } from '@/features/user/queries';
import {
  generateDaysInMonth,
  getDayFromDateString,
  getLastDayOfMonth,
  getMonth,
  getYear,
} from '@/features/user/service/utils';
import { AttendanceCalendarBoard } from '@/features/user/ui/styles';
import { getImageUrl } from '@/utils/getImageUrl';
import { useEffect, useMemo } from 'react';

export default function AttendanceCalendar() {
  const { data: userAttendanceList } = useUserAttendanceQuery.getAttendanceList(
    {
      year: getYear(),
      month: getMonth(),
    }
  );
  const { data: isUserAttendance } = useUserAttendanceQuery.getAttendance();
  const { mutate: recordAttendance } =
    useUserAttendanceQuery.recordAttendance();

  const days = useMemo(() => generateDaysInMonth(), []);

  useEffect(() => {
    if (!isUserAttendance) {
      recordAttendance();
    }
  }, []);

  const StampDays = useMemo(
    () =>
      userAttendanceList.reduce<Record<number, boolean>>((acc, cur) => {
        acc[getDayFromDateString(cur.date)] = true;
        return acc;
      }, {}),
    []
  );

  return (
    <AttendanceCalendarBoard>
      {days.map(day => (
        <span key={day}>
          {StampDays[day] && '도장'}
          {day}
        </span>
      ))}
      <img src={getImageUrl('달력아래.svg')} />
    </AttendanceCalendarBoard>
  );
}
