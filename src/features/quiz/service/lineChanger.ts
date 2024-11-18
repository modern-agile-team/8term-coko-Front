const lineChanger = (text: string = '') => {
  return text.replace(/\n/g, "<div class='line-change'></div>");
};

export default lineChanger;
