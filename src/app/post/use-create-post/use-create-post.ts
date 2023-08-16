import { useMutation } from '@apollo/client';
import { FieldErrors, UseFormRegister, useForm } from 'react-hook-form';
import { CREATE_POST_DOCUMENT, GET_POST_DOCUMENT } from '../post.graphql';


export interface UseCreatePost {
  register: UseFormRegister<PostValue>;
  errors: FieldErrors<PostValue>;
  onCreatingPost: boolean;
  onSubmit: (e?: React.BaseSyntheticEvent<object> | undefined) => void;
}

export type PostValue = {
  textContent: string;
};

export function useCreatePost(): UseCreatePost {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PostValue>();

  const [createPost, { loading }] = useMutation(CREATE_POST_DOCUMENT);

  const onSubmit = handleSubmit((data) =>
    createPost({
      variables: {
        input: data,
      },
      refetchQueries: [GET_POST_DOCUMENT],
    }).then(() => {
      reset();
    })
  );
  return {
    register,
    errors,
    onCreatingPost: loading,
    onSubmit,
  };
}

export default useCreatePost;
