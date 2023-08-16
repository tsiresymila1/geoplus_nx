import { useQuery } from '@apollo/client';
import styles from './user-provider.module.scss';
import ME_DOCUMENT from './user.graphql';
import { Container, Image, Row } from 'react-bootstrap';
import { User } from 'src/gql/graphql';
import { useAppDispatch } from '../redux/hooks';
import { destroy } from '../redux/slice/auth.slice';

/* eslint-disable-next-line */
export interface UserProviderProps {
  children: React.ReactNode | React.ReactNode[] | null;
}

export function UserProvider({ children }: UserProviderProps) {
  const dispatch = useAppDispatch();
  const { data } = useQuery<{ me: User }>(ME_DOCUMENT);
  const logout = () => {
    dispatch(destroy());
  };
  return (
    <Container className={styles['container']}>
      <div
        className="d-flex justify-content-end py-2 align-items-center gap-2"
        style={{ height: 80 }}
      >
        <button className="btn btn-secondary" onClick={logout}>
          Logout
        </button>
        <span>
          <b> {data?.me.displayName}</b>
        </span>
        <Image
          src={data?.me.avatar.url}
          className="img-rounded p-0"
          style={{
            height: 50,
            width: 50,
            objectFit: 'cover',
            borderRadius: 25,
          }}
        />
      </div>
      <Row className="w-100 justify-items-center" >{children}</Row>
    </Container>
  );
}

export default UserProvider;
