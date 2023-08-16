import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useCreatePost from './use-create-post';

describe('useCreatePost', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useCreatePost());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
