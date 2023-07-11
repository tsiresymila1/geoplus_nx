import { useMutation } from '@apollo/client';
import { FieldErrors, UseFormRegister, useForm } from 'react-hook-form';
import { CREATE_POST_DOCUMENT } from '../post.graphql';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UsePost {
  register: UseFormRegister<PostValue>;
  errors: FieldErrors<PostValue>;
  onCreatingPost: boolean;
  onSubmit: (e?: React.BaseSyntheticEvent<object> | undefined) => void;
}

export type PostValue = {
  textContent: string;
};

export function usePost(): UsePost {
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
      update(cache, { data: { createPost } }) {
        const id = cache.identify(createPost);
        cache.modify({
          fields: {
            posts(existingPostRefs, { toReference }) {
              const newData = [
                toReference(createPost),
                ...existingPostRefs['data'],
              ];
              console.log(
                'existingPostRefs >>>>',
                id,
                toReference(createPost),
                newData
              );
              return {
                ...existingPostRefs,
                data: newData,
              };
            },
          },
        });
      },
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

export default usePost;
