import { useEffect } from 'react';
import { useAppSelector } from '../redux/hooks';
import { selectApiToken } from '../redux/slice/auth.slice';
import { useNavigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface AuthProviderProps {
  children: React.ReactNode | React.ReactNode[] | null;
}

export function AuthProvider(props: AuthProviderProps) {
  const apiToken = useAppSelector(selectApiToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (apiToken) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiToken]);
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{props.children}</>;
}

export default AuthProvider;
