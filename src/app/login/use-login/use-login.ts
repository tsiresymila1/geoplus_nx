/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react';
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
  useForm,
} from 'react-hook-form';
import { useAppDispatch } from 'src/app/redux/hooks';
import { setUp } from 'src/app/redux/slice/auth.slice';
import { AuthResponse } from 'src/gql/graphql';

export interface UseLogin {
  loginRegister: UseFormRegister<LoginFormValue>;
  loginErrors: FieldErrors<LoginFormValue>;
  onSingIn: UseFormHandleSubmit<LoginFormValue>;
  reserLoginFom: UseFormReset<LoginFormValue>;
  onSignedOn: (data: AuthResponse) => void;
}

type LoginFormValue = {
  email: string;
  password: string;
};

export function useLogin(): UseLogin {
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<LoginFormValue>({
    defaultValues: {
      email: 'userone@deltace.fr',
      password: 'Aa1!1111',
    },
  });

  const onSignedOn = useCallback((data: AuthResponse) => {
    dispatch(setUp({ apiToken: data.apiToken, authToken: data.authToken }));
  }, []);
  return {
    loginRegister: register,
    loginErrors: errors,
    onSingIn: handleSubmit,
    reserLoginFom: reset,
    onSignedOn,
  };
}

export default useLogin;
