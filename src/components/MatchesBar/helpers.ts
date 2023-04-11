import sample from 'lodash/sample';
import type { Match } from 'pages/Home';

type HandleGoal = (match: Match) => Match;

const handleGoal: HandleGoal = (match) => {
  const teamScoredGoal = sample(match[0]);
  const indexTeam = match[0].findIndex(
    (teamName) => teamName === teamScoredGoal
  );
  return [
    match[0],
    match[1].map((goal, index) => (index === indexTeam ? +goal + 1 : goal)),
  ];
};

export default handleGoal;
