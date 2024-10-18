const emptyChangeToArray = (text: string) => {
  const n = text.replace(/\n/, ' br ');
  const textArray = n.match(/(#empty#|(?!#empty#)\S+)/g);
  return textArray ?? [];
  // return textArray.filter(Boolean);
};
export default emptyChangeToArray;
