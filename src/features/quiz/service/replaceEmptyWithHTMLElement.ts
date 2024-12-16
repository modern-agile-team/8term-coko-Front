const replaceEmptyWithHTMLElement = (text: string) => {
  let index = 0;
  const newText = text.replace(/(#empty#)/g, () => {
    const replacement = `<span id="emptyBlock${index}" class="empty"></span>`;
    index++;
    return replacement;
  });

  return newText;
};
export default replaceEmptyWithHTMLElement;
