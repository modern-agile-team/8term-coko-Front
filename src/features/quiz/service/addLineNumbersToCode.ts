const addLineNumbersToCode = (code: string) => {
  const splittedCode = code.split('\n');
  const lineAttachedCode = splittedCode
    .map((code, i) => `<div>${i + 1} | ${code}`)
    .join('\n');
  return lineAttachedCode;
};
export default addLineNumbersToCode;
