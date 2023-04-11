import { expect, describe, it } from 'vitest';

import { screen, render, waitFor } from '@testing-library/react';

import { matches } from 'mocks/scoreBoard';
import ScoreBoard from './ScoreBoard';

describe('ScoreBoard', () => {
  it('displays a list of matches', async () => {
    render(<ScoreBoard matches={matches} />);

    await waitFor(() => {
      for (let i = 0; i < matches.length; i += 1) {
        expect(
          screen.getByText(`${matches[i][0][0]} - ${matches[i][0][1]}`)
        ).toBeInTheDocument();
      }
    });
  });

  it('displays an alert when no matches are available', () => {
    render(<ScoreBoard matches={[]} />);

    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(
      screen.getByText('There are no matches available.')
    ).toBeInTheDocument();
  });
});
