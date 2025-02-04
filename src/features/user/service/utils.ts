export const getMonth = () => {
  const today = new Date();
  return today.getMonth() + 1;
};

export const getLastDayOfMonth = (): number => {
  const today = new Date();
  const targetYear = today.getFullYear();
  const targetMonth = getMonth();
  return new Date(targetYear, targetMonth, 0).getDate();
};
