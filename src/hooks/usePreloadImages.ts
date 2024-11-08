import { useLayoutEffect, useState } from 'react';
interface ImagePreloadOptions {
  baseURL: string;
  imageUrls: string[];
}
const usePreloadImages = ({
  baseURL,
  imageUrls,
}: ImagePreloadOptions): boolean => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useLayoutEffect(() => {
    const imagePromise = imageUrls.map(url => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => reject(new Error(`이미지 가져오기 실패:${url}`));
        img.src = baseURL + url;
      });
    });
    Promise.all(imagePromise)
      .then(data => {
        console.log(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error.message);
        setIsLoading(false);
      });
  }, []);
  return isLoading;
};
export default usePreloadImages;
