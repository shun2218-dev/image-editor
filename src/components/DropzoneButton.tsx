import { FC, useState } from 'react';
import { Button, Container, Group, Text, rem, FileButton } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { useStore } from '../store';
import { useMediaQuery } from '@mantine/hooks';

type Props = Partial<DropzoneProps>;
export const DropzoneButton: FC<Props> = ({ ...props }) => {
  const previewImage = useStore((state) => state.previewImage);
  const setPreviewImage = useStore((state) => state.setPreviewImage);
  const pc = useMediaQuery('(min-width: 768px)');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  console.log(previewImage);

  const handleDrop = async (files: File) => {
    try {
      setIsLoading(true);
      setPreviewImage(files);
    } catch (e: any) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Container style={{ paddingTop: '2rem' }}>
      {pc ? (
        <Dropzone
          onDrop={(files) => handleDrop(files[0])}
          onReject={(files) => console.error('rejected files', files)}
          maxSize={15 * 1024 ** 2}
          accept={IMAGE_MIME_TYPE}
          {...props}
          loading={isLoading}
        >
          <Group
            justify="center"
            gap="xl"
            mih={220}
            style={{ pointerEvents: 'none' }}
          >
            <Dropzone.Accept>
              <IconUpload
                style={{
                  width: rem(52),
                  height: rem(52),
                  color: 'var(--mantine-color-blue-6)',
                }}
                stroke={1.5}
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX
                style={{
                  width: rem(52),
                  height: rem(52),
                  color: 'var(--mantine-color-red-6)',
                }}
                stroke={1.5}
              />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconPhoto
                style={{
                  width: rem(52),
                  height: rem(52),
                  color: 'var(--mantine-color-dimmed)',
                }}
                stroke={1.5}
              />
            </Dropzone.Idle>

            <div>
              <Text size="xl" inline>
                Drag images here or click to select files
              </Text>
              <Text size="sm" c="dimmed" inline mt={7}>
                Attach as many files as you like, each file should not exceed
                5mb
              </Text>
            </div>
          </Group>
        </Dropzone>
      ) : (
        <Group justify="center">
          <FileButton
            onChange={(file) => handleDrop(file!)}
            accept={IMAGE_MIME_TYPE.join(',')}
          >
            {(props) => <Button {...props}>Upload image</Button>}
          </FileButton>
        </Group>
      )}
    </Container>
  );
};
