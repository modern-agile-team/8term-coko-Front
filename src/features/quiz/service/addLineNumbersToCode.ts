const addLineNumbersToCode = (code: string) => {
  const splittedCode = code.split('\n');
  const lineAttachedCode = splittedCode
    .map((code, i) => `<span>${i + 1} |</span> ${code}`)
    .join('\n');
  return lineAttachedCode;
};
export default addLineNumbersToCode;
