import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthRequired from '../auth-required/auth-required';
import Login from '../login/login';
import Logout from '../logout/logout';
import Post from '../post/post';

/* eslint-disable-next-line */
export interface RouterProps {}

export function Router(props: RouterProps) {
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
    {
      path: 'logout',
      element: <Logout />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
