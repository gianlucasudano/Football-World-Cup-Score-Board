import sample from 'lodash/sample';

import { useState, useCallback } from 'react';
import { scheduledMatches } from 'mocks/scoreBoard';

import Container from '@mui/material/Container';

import ScoreBoard from 'components/ScoreBoard';
import MatchesBar from 'components/MatchesBar';
import handleGoal from 'components/MatchesBar/helpers';

export type Match = [string[], number[]];
export type Matches = Match[];
export type MatchesState = Matches | [];

function Home() {
  const [notStarted, setNotStarted] = useState<MatchesState>(scheduledMatches);
  const [scoreBoardMatches, setScoreBoardMatches] = useState<MatchesState>([]);

  const startNewMatch: () => void = useCallback(() => {
    const randomMatch =
      notStarted.length === 1 ? notStarted[0] : (sample(notStarted) as Match);
    const notStartedMatches = notStarted.filter(
      (match) => match[0] !== randomMatch[0]
    );
    setScoreBoardMatches([...scoreBoardMatches, randomMatch]);
    setNotStarted(notStartedMatches);
  }, [notStarted, scoreBoardMatches]);

  const setNewMatchResult: () => void = useCallback(() => {
    const updatedMatch = handleGoal(sample(scoreBoardMatches) as Match);
    setScoreBoardMatches(
      scoreBoardMatches.map((match: Match) =>
        match.length &&
        updatedMatch.length &&
        match[0][0] === updatedMatch[0][0]
          ? updatedMatch
          : match
      )
    );
  }, [scoreBoardMatches]);

  const endsMatch: () => void = useCallback(() => {
    const terminatedMatch = sample(scoreBoardMatches) as Match;
    setScoreBoardMatches(
      scoreBoardMatches.filter(
        (match) =>
          match.length &&
          terminatedMatch.length &&
          match[0][0] !== terminatedMatch[0][0]
      )
    );
  }, [scoreBoardMatches]);

  return (
    <Container maxWidth="sm">
      <ScoreBoard matches={scoreBoardMatches} />
      <MatchesBar
        endsMatch={endsMatch}
        matchesNotStarted={notStarted}
        scoreBoardMatches={scoreBoardMatches}
        setNewMatchResult={setNewMatchResult}
        startNewMatch={startNewMatch}
      />
    </Container>
  );
}

export default Home;
