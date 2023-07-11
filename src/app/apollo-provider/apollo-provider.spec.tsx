import { render } from '@testing-library/react';

import ApolloProvider from './apollo-provider';

describe('ApolloProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ApolloProvider children={<div />} />);
    expect(baseElement).toBeTruthy();
  });
});
