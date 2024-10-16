const emptyChangeToArray = (text: string) => {
  const textArray = text.split('#');
  return textArray.filter(Boolean);
};
export default emptyChangeToArray;
