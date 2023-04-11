import { expect, describe, it } from 'vitest';

import { screen, render } from '@testing-library/react';

import Home from './Home';

describe('Home', () => {
  it('renders all elements', () => {
    render(<Home />);

    expect(
      screen.getByRole('heading', { name: 'Football World Cup Score Board' })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: 'Simulates a page updated by a feed.',
      })
    ).toBeInTheDocument();
  });
});
