import { matches } from 'mocks/scoreBoard';

import Container from '@mui/material/Container';

import ScoreBoard from 'components/ScoreBoard';

function Home() {
  return (
    <Container maxWidth="sm">
      <ScoreBoard matches={matches} />
    </Container>
  );
}

export default Home;
