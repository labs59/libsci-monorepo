import { render } from '@testing-library/react';

import LibsciUi from './ui';

describe('LibsciUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibsciUi />);
    expect(baseElement).toBeTruthy();
  });
});
