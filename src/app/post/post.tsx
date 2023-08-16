import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import PostItem from './post-item/post-item';
import usePost from './use-post/use-post';
import useCreatePost from './use-create-post/use-create-post';
import styles from './post.module.scss';

export function Post() {
  const { register, errors, onCreatingPost, onSubmit } = useCreatePost();
  const { data, loading, pageCount, pageDisabled, onPaginate } = usePost();

  return (
    <>
      <Container className={styles['container']}>
        <h1 className="py-4">Welcome to Post! </h1>
        <Row className="gap-5  ">
          {data?.posts &&
            data?.posts.data.map((d) => {
              return <PostItem key={d.id} post={d} />;
            })}
          <div className="d-flex gap-2 justify-content-center">
            {data?.posts &&
              [...Array(pageCount).keys()].map((e) => {
                return (
                  <button
                    disabled={e === pageDisabled}
                    className="btn btn-primary"
                    onClick={() => onPaginate(e)}
                  >
                    {e + 1}
                  </button>
                );
              })}
          </div>
          {loading && (
            <Col>
              <Spinner />
            </Col>
          )}
        </Row>
      </Container>
      <div className="position-absolute bottom-0 mb-2 d-flex">
        <Form onSubmit={onSubmit} className="w-100">
          {errors.textContent && (
            <span className="text-danger">{errors.textContent.message}</span>
          )}
          <Form.Group className="d-flex gap-2 position-relative w-100 align-items-center">
            <Form.Control
              {...register('textContent', {
                validate: (v) => v.length > 0 || 'Content required',
              })}
              as={'textarea'}
              placeholder="Content"
            />
            <Button type="submit" className="d-flex" disabled={onCreatingPost}>
              Create{' '}
              {onCreatingPost && <Spinner size="sm" className="mx-2 mt-1" />}
            </Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}

export default Post;
