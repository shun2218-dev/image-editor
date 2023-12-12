import App from './App';
import { createBrowserRouter } from 'react-router-dom';
import { Loader } from './components/Loader';
import { UploadPage } from './pages/UploadPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: Loader,
  },
  {
    path: '/upload',
    element: <UploadPage />,
    loader: Loader,
  },
]);
