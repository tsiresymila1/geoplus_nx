import { useQuery } from '@apollo/client';
import styles from './user-provider.module.scss';
import ME_DOCUMENT from './user.graphql';
import { Container, Image, Row } from 'react-bootstrap';
import { User } from 'src/gql/graphql';

/* eslint-disable-next-line */
export interface UserProviderProps {
  children: React.ReactNode | React.ReactNode[] | null;
}

export function UserProvider({ children }: UserProviderProps) {
  const { data } = useQuery<{ me: User }>(ME_DOCUMENT);
  return (
    <Container className={styles['container']}>
      <Row className="justify-content-end py-2" style={{ height: 80 }}>
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
      </Row>
      <Row>{children}</Row>
    </Container>
  );
}

export default UserProvider;
