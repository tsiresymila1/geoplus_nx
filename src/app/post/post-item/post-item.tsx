import { Post } from 'src/gql/graphql';
import { Button, Card, Spinner } from 'react-bootstrap';
import { Reference, useMutation } from '@apollo/client';
import DELETE_POST_DOCUMENT from './post-item.graphql';
import { useCallback } from 'react';

/* eslint-disable-next-line */
export interface PostItemProps {
  post: Post;
}

export function PostItem({ post }: PostItemProps) {
  const [deletePost, { loading }] = useMutation(DELETE_POST_DOCUMENT);

  const deletePostItem = useCallback(async () => {
    deletePost({
      variables: {
        input: {
          id: post.id,
        },
      },
      // use update or refetch query
      update(cache, { data: { deletePost } }) {
        cache.modify({
          fields: {
            posts(existingPostRefs, { toReference }) {
              const newData = [
                ...existingPostRefs['data'].filter(
                  (d: Reference | undefined) =>
                    d?.__ref !== toReference(deletePost)?.__ref
                ),
              ];
              return {
                ...existingPostRefs,
                data: newData,
              };
            },
          },
        });
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post]);

  return (
    <Card style={{ width: '18rem' }}>
      {post.image && <Card.Img variant="top" src={post.image.url} />}
      <Card.Body>
        <Card.Title>{post.category?.label}</Card.Title>
        <Card.Text>{post.textContent}</Card.Text>
        <Button variant="primary" onClick={deletePostItem}>
          Delete {loading && <Spinner size="sm" />}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PostItem;
