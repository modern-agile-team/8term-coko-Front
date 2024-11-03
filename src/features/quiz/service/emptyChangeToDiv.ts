const emptyChangeToDiv = (text: string) => {
  let index = 0;
  const newText = text.replace(/(#empty#)/g, () => {
    const replacement = `<div id="emptyBlock${index}" class = "empty"></div>`;
    index++;
    return replacement;
  });

  return newText;
};
export default emptyChangeToDiv;
