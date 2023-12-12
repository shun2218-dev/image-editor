import { FC, useState, useEffect } from 'react';
import useImage from 'use-image';
import { FileWithPath } from '@mantine/dropzone';
import { Loader } from './Loader';
import { Alert, Button, Container, Stack } from '@mantine/core';
import { IconArrowRight, IconExclamationCircle } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';

type Props = {
  file: FileWithPath;
};

export const PreviewImage: FC<Props> = ({ file }) => {
  const pc = useMediaQuery('(min-width: 768px)');
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const getImageURL = async (file: FileWithPath) => {
    await (async () => {
      try {
        const fileReader = new FileReader();
        fileReader.onload = () => {
          setPreviewImage(fileReader.result as string);
        };
        fileReader.readAsDataURL(file);
      } catch (e) {
        console.error(e);
      }
    })();
  };
  const [_, status] = useImage(previewImage!);
  useEffect(() => {
    (async () => {
      try {
        await getImageURL(file);
      } catch (e) {
        console.error(e, 'loading failed');
      }
    })();
  }, [file]);
  return (
    <Container
      display={'flex'}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2rem',
        padding: '0.5rem',
      }}
    >
      {status === 'loading' && <Loader />}
      {status === 'loaded' && previewImage && (
        <Stack>
          <img
            src={previewImage}
            alt="preview image"
            style={{ objectFit: 'contain', maxWidth: '100%' }}
            width={pc ? 400 : 280}
            height={'auto'}
          />
          <Button
            variant="light"
            onClick={() => {}}
            disabled={!previewImage}
            rightSection={<IconArrowRight size={14} />}
          >
            Next
          </Button>
        </Stack>
      )}
      {status === 'failed' && (
        <Alert
          variant="light"
          color="red"
          title="Failed to load image"
          icon={<IconExclamationCircle />}
        >
          Error: Failed to load image for something. Try again a moment later.
        </Alert>
      )}
    </Container>
  );
};
