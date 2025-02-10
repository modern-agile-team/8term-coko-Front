import { useUserAttendanceQuery } from '@/features/user/queries';
import {
  generateDaysInMonth,
  getDayFromDate,
  getCurrentMonth,
  getCurrentYear,
} from '@/features/user/service/utils';
import {
  AttendanceCalendarBoard,
  AttendanceDayCell,
} from '@/features/user/ui/styles';
import { getImageUrl } from '@/utils/getImageUrl';
import { useEffect, useMemo } from 'react';
import toast from 'react-hot-toast';

export default function AttendanceCalendar() {
  const { data: userAttendanceList } = useUserAttendanceQuery.getAttendanceList(
    {
      year: getCurrentYear(),
      month: getCurrentMonth(),
    }
  );
  const { data: isUserAttendance } = useUserAttendanceQuery.getAttendance();
  const { mutate: recordAttendance } =
    useUserAttendanceQuery.recordAttendance();

  const days = generateDaysInMonth();

  useEffect(() => {
    if (!isUserAttendance) {
      recordAttendance(undefined, {
        onSuccess: () => {
          toast('출석체크 성공!');
        },
      });
    }
  }, []);

  const stampDaysMap = useMemo(
    () =>
      userAttendanceList.reduce<Record<number, boolean>>((acc, cur) => {
        acc[getDayFromDate(cur.date)] = true;
        return acc;
      }, {}),
    [userAttendanceList]
  );

  return (
    <AttendanceCalendarBoard>
      {days.map(day => (
        <AttendanceDayCell key={day}>
          {stampDaysMap[day] && <img src={getImageUrl('출석체크도장.svg')} />}
          <p>{day}</p>
        </AttendanceDayCell>
      ))}
    </AttendanceCalendarBoard>
  );
}
