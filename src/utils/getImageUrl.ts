const IMG_BASE_URL = import.meta.env.VITE_IMG_BASE_URL;

export const getImageUrl = (url: string) => {
  const regex = /^https?:\/\//;
  if (regex.test(url)) {
    return url; // 풀 URL인 경우 그대로 반환, 이 부분은 필요할 수도 필요하지 않을 수 있음
  }
  // 상대 경로인 경우 IMG_BASE_URL을 붙여서 반환
  return IMG_BASE_URL + url;
};
