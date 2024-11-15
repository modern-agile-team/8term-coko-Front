import { useLayoutEffect, useState } from 'react';
const IMG_DEFAULT_BASE_URL = import.meta.env.VITE_IMG_BASE_URL;
interface ImagePreloadOptions {
  baseUrl?: string;
  imageUrls: string[];
}
/**
 * @description 이미지를 미리 preload해오기 위해 만든 커스텀 훅 입니다
 * @param baseUrl 기본적으로 s3에서 이미지를 가져오기 위해 기본값으로 값이 들어가있습니다.
 * @param imageUrls baseUrl 뒤에 붙을 이미지의 상세 주소입니다
 * @returns isLoading 상태가 리턴됩니다 boolean값으로 이미지를 다 가져왔는지 아닌지 상태를 알 수 있습니다.
 * @example
 * const isLoading = usePreloadImages({imageUrls:['/defaultImg.png','/defaultImg2.gif']});
 * if(isLoading){
 *    return <Loading/>;
 * }
 */

const usePreloadImages = ({
  baseUrl = IMG_DEFAULT_BASE_URL,
  imageUrls,
}: ImagePreloadOptions): boolean => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useLayoutEffect(() => {
    const imagePromise = imageUrls.map(url => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => reject(new Error(`이미지 가져오기 실패:${url}`));
        img.src = baseUrl + url;
      });
    });
    Promise.allSettled(imagePromise).then(values => {
      const rejectedValues = values.filter(
        value => value.status === 'rejected'
      );
      if (rejectedValues.length > 0) {
        console.error(rejectedValues);
      }

      setIsLoading(false);
    });
  }, []);
  return isLoading;
};
export default usePreloadImages;
