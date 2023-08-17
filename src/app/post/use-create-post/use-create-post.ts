import { FieldErrors, UseFormRegister, useForm } from 'react-hook-form';
import { useCreatePostMutation } from 'src/gql/graphql';


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

  const [createPost, { loading }] = useCreatePostMutation();

  const onSubmit = handleSubmit((data) =>
    createPost({
      variables: {
        input: data,
      },
      refetchQueries: ["posts"],
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
