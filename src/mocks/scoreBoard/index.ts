import type { MatchesByScore, Matches } from 'components/ScoreBoard/helpers';

const matches: Matches = [
  [
    ['Uruguay', 'Italy'],
    [0, 3],
  ],
  [
    ['Spain', 'Brazil'],
    [2, 1],
  ],
  [
    ['Mexico', 'Canada'],
    [3, 1],
  ],
  [
    ['Argentina', 'Australia'],
    [3, 2],
  ],
  [
    ['Germany', 'France'],
    [2, 3],
  ],
];

const matchesSortedByScore: Matches = [
  [
    ['Germany', 'France'],
    [2, 3],
  ],
  [
    ['Argentina', 'Australia'],
    [3, 2],
  ],
  [
    ['Mexico', 'Canada'],
    [3, 1],
  ],
  [
    ['Spain', 'Brazil'],
    [2, 1],
  ],
  [
    ['Uruguay', 'Italy'],
    [0, 3],
  ],
];

const matchesGroupedByScore: MatchesByScore = {
  '3': [
    [
      ['Uruguay', 'Italy'],
      [0, 3],
    ],
    [
      ['Spain', 'Brazil'],
      [2, 1],
    ],
  ],
  '4': [
    [
      ['Mexico', 'Canada'],
      [3, 1],
    ],
  ],
  '5': [
    [
      ['Argentina', 'Australia'],
      [3, 2],
    ],
    [
      ['Germany', 'France'],
      [2, 3],
    ],
  ],
};

const sortedKeys: string[] = ['5', '4', '3'];

export { matches, matchesSortedByScore, matchesGroupedByScore, sortedKeys };
