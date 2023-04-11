import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import type { MatchesState } from 'pages/Home';

function MatchesBar({
  endsMatch,
  matchesNotStarted,
  scoreBoardMatches,
  setNewMatchResult,
  startNewMatch,
}: {
  endsMatch: () => void;
  matchesNotStarted: MatchesState;
  scoreBoardMatches: MatchesState;
  setNewMatchResult: () => void;
  startNewMatch: () => void;
}) {
  return (
    <Paper elevation={3}>
      <Typography p={2} component="h2" variant="h6">
        Simulates a feed page update.
      </Typography>
      <Stack direction="row" gap={2} p={2} justifyContent="space-around">
        <Button
          color="inherit"
          disabled={matchesNotStarted.length === 0}
          onClick={startNewMatch}
          type="button"
          variant="outlined"
        >
          Starts a match
        </Button>
        <Button
          color="inherit"
          disabled={scoreBoardMatches.length === 0}
          onClick={setNewMatchResult}
          type="button"
          variant="outlined"
        >
          Goal
        </Button>
        <Button
          color="inherit"
          disabled={scoreBoardMatches.length === 0}
          onClick={endsMatch}
          type="button"
          variant="outlined"
        >
          Ends a match
        </Button>
      </Stack>
    </Paper>
  );
}

export default MatchesBar;
