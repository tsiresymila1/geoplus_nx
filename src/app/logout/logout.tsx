import { useEffect } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { destroy } from '../redux/slice/auth.slice';
import { Navigate, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import LOUGOUT_DOCUMENT from './logout.graphql';
import { Modal, Spinner } from 'react-bootstrap';

/* eslint-disable-next-line */
export interface LogoutProps {}

export function Logout(props: LogoutProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [logout, { loading }] = useMutation(LOUGOUT_DOCUMENT);

  useEffect(() => {
    logout().finally(() => {
      dispatch(destroy());
      navigate('/login');
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return(
    <Modal show={loading}>
      <Spinner></Spinner>
    </Modal>
  );
}

export default Logout;
