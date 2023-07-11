import { render } from '@testing-library/react';

import AuthRequired from './auth-required';

describe('AuthRequired', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AuthRequired />);
    expect(baseElement).toBeTruthy();
  });
});
