import React from 'react';
import { render } from '@testing-library/react';

import Ttext from './ttext';

describe('Ttext', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ttext />);
    expect(baseElement).toBeTruthy();
  });
});
