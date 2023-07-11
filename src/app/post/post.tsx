import { useQuery } from '@apollo/client';
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { PaginatedPosts } from 'src/gql/graphql';
import styles from './post.module.scss';
import PostItem from './post-item/post-item';
import { GET_POST_DOCUMENT } from './post.graphql';
import usePost from './use-post/use-post';

/* eslint-disable-next-line */
export interface PostProps {}

export function Post(props: PostProps) {
  const { data, loading } = useQuery<{ posts: PaginatedPosts }>(
    GET_POST_DOCUMENT
  );
  const { register, errors, onCreatingPost, onSubmit } = usePost();
  return (
    <>
      <Container className={styles['container']}>
        <h1>Welcome to Post! </h1>
        <Row className="gap-5">
          {data?.posts &&
            data?.posts.data.map((d) => {
              return <PostItem key={d.id} post={d} />;
            })}
          {loading && (
            <Col>
              <Spinner />
            </Col>
          )}
        </Row>
      </Container>
      <Container className="position-absolute bottom-0 mb-2">
        <Row>
          <Form onSubmit={onSubmit}>
            {errors.textContent && <span>{errors.textContent.message}</span>}
            <Form.Group className="d-flex gap-2">
              <Form.Control
                {...register('textContent', {
                  validate: (v) => v.length > 0 || 'Content required',
                })}
                placeholder="Content"
              />
              <Button
                type="submit"
                className="d-flex"
                disabled={onCreatingPost}
              >
                Create{' '}
                {onCreatingPost && <Spinner size="sm" className="mx-2 mt-1" />}
              </Button>
            </Form.Group>
          </Form>
        </Row>
      </Container>
    </>
  );
}

export default Post;
