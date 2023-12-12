import { FC, ReactNode, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Alert, MantineProvider } from '@mantine/core';
import { Loader } from './Loader';
import { IconExclamationCircle } from '@tabler/icons-react';

type Props = {
  children: ReactNode;
};

const ErrorFallback = ({ error }: { error: unknown }) => {
  return (
    <Alert title="Error Message" color="red" icon={<IconExclamationCircle />}>
      Error: {error instanceof Error ? error.message : 'Something went wrong'}
    </Alert>
  );
};

export const RootProvider: FC<Props> = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<Loader />}>
        <MantineProvider>{children}</MantineProvider>
      </Suspense>
    </ErrorBoundary>
  );
};
