import { Button, Container, Form, Row, Spinner } from 'react-bootstrap';
import styles from './login.module.scss';
import useLogin from './use-login/use-login';
import { useMutation } from '@apollo/client';
import SIGNIN_DOCUMENT from './login.graphql';
import { AuthResponse } from 'src/gql/graphql';
import { useEffect } from 'react';
import AuthProvider from '../auth-provider/auth-provider';

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {
  const { loginErrors, onSingIn, loginRegister, onSignedOn } = useLogin();
  const [mutate, { data: signInData, loading, error }] = useMutation<{
    signin: AuthResponse;
  }>(SIGNIN_DOCUMENT);
  const onSubmit = onSingIn((data) =>
    mutate({
      variables: {
        input: data,
      },
    })
  );
  useEffect(() => {
    if (signInData && signInData.signin) {
      console.log(signInData.signin);
      onSignedOn(signInData.signin);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signInData]);

  return (
    <AuthProvider>
      <Container className={`${styles['container']}  `}>
        <Row className="h-100 justify-content-center align-items-center">
          <Form className={`${styles.form} m-auto pt-4`} onSubmit={onSubmit}>
            <div className="text-center">
              <h1>Welcome to Login!</h1>
            </div>
            {error && <div>{error.message}</div>}
            <div className="pt-4 pb-5 px-4">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email"
                  {...loginRegister('email', {
                    validate: (v) => v.length > 0 || 'Email not valid',
                    required: true,
                  })}
                />
                {loginErrors.email && (
                  <Form.Text className="text-muted">
                    {loginErrors.email.message}
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  {...loginRegister('password', {
                    validate: (v) => v.length > 0 || 'Email not valid',
                    required: true,
                  })}
                />
                {loginErrors.password && (
                  <Form.Text className="text-muted">
                    {loginErrors.password.message}
                  </Form.Text>
                )}
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit {loading && <Spinner size={'sm'} />}
              </Button>
            </div>
          </Form>
        </Row>
      </Container>
    </AuthProvider>
  );
}

export default Login;
