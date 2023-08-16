import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthRequired from '../auth-required/auth-required';
import Login from '../login/login';
import Post from '../post/post';

export function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AuthRequired />,
      children: [
        {
          path: '',
          element: <Post />,
        },
      ],
    },
    {
      path: 'login',
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
