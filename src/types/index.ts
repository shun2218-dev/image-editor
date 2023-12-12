import { FileWithPath } from '@mantine/dropzone';
type PreviewImageFile = FileWithPath | null;

type StoreState = {
  previewImage: PreviewImageFile;
  setPreviewImage: (payload: PreviewImageFile) => void;
};

export type { PreviewImageFile, StoreState };
