import { useQuery } from '@apollo/client';
import { GET_POST_DOCUMENT } from '../post.graphql';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { PaginatedPosts, QueryPostsArgs } from 'src/gql/graphql';

export interface UsePost {
  pageCount: number;
  pageDisabled: number;
  onPaginate: (p: number) => void;
  data?: { posts: PaginatedPosts };
  loading: boolean;
}

export function usePost(): UsePost {
  const [limit] = useState<number>(12);
  const [offset, setOffset] = useState<number>(0);
  const { data, loading } = useQuery<{ posts: PaginatedPosts }, QueryPostsArgs>(
    GET_POST_DOCUMENT,
    {
      variables: {
        pagination: {
          offset,
          limit,
        },
      },
    }
  );
  const pageCount = useMemo(() => {
    return Math.max(1, Math.ceil((data?.posts.pagination.total ?? 0) / limit));
  }, [data, limit]);

  const pageDisabled = useMemo(
    () => Math.ceil(offset / limit),
    [offset, limit]
  );

  const onPaginate = useCallback(
    (page: number) => {
      console.log('Paginate >>>', page * limit);
      setOffset(page * limit);
    },
    [limit]
  );

  useEffect(() => {
    if (data && data?.posts.pagination.offset >= data?.posts.pagination.total) {
      setOffset(Math.max(0, offset - limit));
    }
  }, [data, limit, offset]);

  return {
    pageCount,
    onPaginate,
    data,
    loading,
    pageDisabled,
  };
}

export default usePost;
