import { Post, useDeletePostMutation } from 'src/gql/graphql';
import moment from 'moment';
import { Button, Card, Spinner } from 'react-bootstrap';
import { useCallback } from 'react';
export interface PostItemProps {
  post: Post;
}

export function PostItem({ post }: PostItemProps) {
  const [deletePost, { loading }] = useDeletePostMutation();

  const deletePostItem = useCallback(async () => {
    deletePost({
      variables: {
        input: {
          id: post.id,
        },
      },
      refetchQueries: ['posts'],
    });
  }, [post, deletePost]);

  return (
    <Card style={{ width: '18rem' }}>
      {post.image && <Card.Img variant="top" src={post.image.url} />}
      <Card.Body>
        <Card.Title>{post.category?.label}</Card.Title>
        <Card.Text>{post.textContent}</Card.Text>
        <div>
          <b>{post.author.displayName} - </b>
          {moment(post.publishedAt).format('YYYY-MM-DD HH:mm')}
        </div>
      </Card.Body>
      <Card.Footer className="justify-content-end d-flex">
        <Button variant="primary" onClick={deletePostItem}>
          Delete {loading && <Spinner size="sm" />}
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default PostItem;
