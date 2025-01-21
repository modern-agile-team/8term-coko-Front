export const getImageNameFromUrl = (url: string) => {
  const name = url.split('/').pop()?.split('.')[0] || '';
  return name;
};
