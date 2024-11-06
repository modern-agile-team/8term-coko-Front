const handlePage = (
  currentPage: number,
  lastPage: number,
  nextPage: () => void
): boolean => {
  //0 1 2 3 4 5 latIndex = 6

  if (currentPage >= lastPage) {
    return false;
  }
  nextPage();
  return true;
};
export default handlePage;
