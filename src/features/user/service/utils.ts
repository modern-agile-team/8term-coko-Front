export const getCurrentYear = () => {
  const today = new Date();
  return today.getFullYear();
};

export const getCurrentMonth = () => {
  const today = new Date();
  return today.getMonth() + 1;
};

export const getLastDayOfMonth = (): number => {
  const targetYear = getCurrentYear();
  const targetMonth = getCurrentMonth();
  return new Date(targetYear, targetMonth, 0).getDate();
};

export const getDayFromDateString = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate();
  return day;
};

export const generateDaysInMonth = () => {
  const lastDay = getLastDayOfMonth(); // 월의 마지막 날 계산
  return Array.from({ length: lastDay }, (_, i) => i + 1);
};
