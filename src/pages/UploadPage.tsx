import { DropzoneButton } from '../components/DropzoneButton';
import { PreviewImage } from '../components/PreviewImage';
import { useStore } from '../store';

export const UploadPage = () => {
  const previewImage = useStore((state) => state.previewImage);
  return (
    <>
      <DropzoneButton />
      {previewImage && <PreviewImage file={previewImage} />}
    </>
  );
};
