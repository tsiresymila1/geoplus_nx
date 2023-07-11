import {
  fetchReduxSliceAuth,
  reduxSliceAuthAdapter,
  reduxSliceAuthReducer,
} from './redux/slice/auth.slice';

describe('reduxSliceAuth reducer', () => {
  it('should handle initial state', () => {
    const expected = reduxSliceAuthAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null,
    });

    expect(reduxSliceAuthReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchReduxSliceAuth', () => {
    let state = reduxSliceAuthReducer(
      undefined,
      fetchReduxSliceAuth.pending('')
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {},
        ids: [],
      })
    );

    state = reduxSliceAuthReducer(
      state,
      fetchReduxSliceAuth.fulfilled([{ id: 1 }], '')
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } },
        ids: [1],
      })
    );

    state = reduxSliceAuthReducer(
      state,
      fetchReduxSliceAuth.rejected(new Error('Uh oh'), '')
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'error',
        error: 'Uh oh',
        entities: { 1: { id: 1 } },
        ids: [1],
      })
    );
  });
});
