import { useLayoutEffect, useState } from 'react';
const IMG_DEFAULT_BASE_URL = import.meta.env.VITE_IMG_BASE_URL;
interface ImagePreloadOptions {
  baseURL?: string;
  imageUrls: string[];
}
const usePreloadImages = ({
  baseURL = IMG_DEFAULT_BASE_URL,
  imageUrls,
}: ImagePreloadOptions): {
  isLoading: boolean;
  error: PromiseRejectedResult[] | null;
} => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<PromiseRejectedResult[] | null>(null);
  useLayoutEffect(() => {
    const imagePromise = imageUrls.map(url => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => reject(new Error(`이미지 가져오기 실패:${url}`));
        img.src = baseURL + url;
      });
    });
    Promise.allSettled(imagePromise).then(values => {
      const rejectedValues = values.filter(
        value => value.status === 'rejected'
      );
      setError(rejectedValues);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, error };
};
export default usePreloadImages;
