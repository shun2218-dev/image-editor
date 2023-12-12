import React from 'react';
import ReactDOM from 'react-dom/client';

import '@mantine/dropzone/styles.css';
import './styles.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './route';
import { RootProvider } from './components/RootProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RootProvider>
      <RouterProvider router={router} />
    </RootProvider>
  </React.StrictMode>
);
