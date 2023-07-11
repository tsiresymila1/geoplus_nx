import styles from './auth-required.module.scss';
import { useAppSelector } from '../redux/hooks';
import { selectApiToken } from '../redux/slice/auth.slice';
import { Navigate, Outlet } from 'react-router-dom';
import UserProvider from '../user-provider/user-provider';

export function AuthRequired() {
  const token = useAppSelector(selectApiToken);

  if (!token) {
    return <Navigate to="/login" />;
  }
  return (
    <div className={styles['container']}>
      <UserProvider>
        <Outlet />
      </UserProvider>
    </div>
  );
}

export default AuthRequired;
