import { SectionButton } from '../../../common/ui/style';

export default function SectionNavigateButton() {
  const imgUrl = import.meta.env.VITE_IMG_BASE_URL;

  const imgUrls = [
    `${imgUrl}섬1.svg`,
    `${imgUrl}섬2.svg`,
    `${imgUrl}섬3.svg`,
    `${imgUrl}섬4.svg`,
    `${imgUrl}섬5.svg`,
  ];

  return (
    <>
      {imgUrls.map((url, index) => (
        <SectionButton key={index} $backgroundImage={url} />
      ))}
    </>
  );
}
