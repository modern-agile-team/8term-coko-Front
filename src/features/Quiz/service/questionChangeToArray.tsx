const questionChangeToArray = (text: string) => {
  const newlineCharacterChange = text.replace(/\n/, ' br ');
  const textArray = newlineCharacterChange.match(/(#empty#|(?!#empty#)\S+)/g);
  return textArray ?? [];
};
export default questionChangeToArray;
