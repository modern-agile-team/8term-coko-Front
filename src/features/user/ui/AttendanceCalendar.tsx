import { userAttendanceQuery } from '@/features/user/queries';
import {
  generateDaysInMonth,
  getDayFromDate,
  getCurrentMonth,
  getCurrentYear,
  getCurrentDay,
} from '@/features/user/service/utils';
import {
  AttendanceCalendarBoard,
  AttendanceDayCell,
  AttendanceStamp,
} from '@/features/user/ui/styles';
import { getImageUrl } from '@/utils/getImageUrl';
import { useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';

export default function AttendanceCalendar() {
  const { data: userAttendanceList } = userAttendanceQuery.useGetAttendanceList(
    {
      year: getCurrentYear(),
      month: getCurrentMonth(),
    }
  );
  const { data: isUserAttendance } = userAttendanceQuery.useGetAttendance();
  const { mutate: recordAttendance } =
    userAttendanceQuery.useRecordAttendance();

  const [isTodayAttendance, setIsTodayAttendance] = useState(false);

  const days = generateDaysInMonth();

  useEffect(() => {
    if (!isUserAttendance) {
      recordAttendance(undefined, {
        onSuccess: data => {
          setIsTodayAttendance(true);
          toast.success('출석체크 성공!');
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
          {stampDaysMap[day] && (
            <AttendanceStamp
              src={getImageUrl('출석체크도장.svg')}
              $isTodayAttendance={isTodayAttendance && day === getCurrentDay()}
            />
          )}
          <p>{day}</p>
        </AttendanceDayCell>
      ))}
    </AttendanceCalendarBoard>
  );
}
