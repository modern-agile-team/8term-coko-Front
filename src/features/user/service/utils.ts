export const getLastDayOfMonth = (): number => {
  const today = new Date();
  const targetYear = today.getFullYear();
  const targetMonth = today.getMonth();

  return new Date(targetYear, targetMonth + 1, 0).getDate();
};
