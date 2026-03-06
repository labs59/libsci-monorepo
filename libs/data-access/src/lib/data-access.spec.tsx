import { render } from '@testing-library/react';

import LibsciDataAccess from './data-access';

describe('LibsciDataAccess', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibsciDataAccess />);
    expect(baseElement).toBeTruthy();
  });
});
