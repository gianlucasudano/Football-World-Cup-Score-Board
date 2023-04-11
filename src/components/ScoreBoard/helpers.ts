import isArray from 'lodash/isArray';
import type { Match, Matches } from 'pages/Home';

export type MatchesByScore = Record<string, Matches>;

type GroupsMatchesByScore = ({
  matches,
}: {
  matches: Matches | [] | undefined;
}) => MatchesByScore | Record<string, never>;

type GetSortedKeys = ({
  matchesByScore,
}: {
  matchesByScore: MatchesByScore | Record<string, never> | undefined;
}) => string[] | [];

type OrderMatchesByScore = ({
  sortedKeys,
  matchesByScore,
}: {
  sortedKeys: string[] | [] | undefined;
  matchesByScore: MatchesByScore | Record<string, never> | undefined;
}) => Matches | [];

type GetMatchesSortedByScore = (
  matches: Matches | [] | undefined
) => Matches | [];

const groupsMatchesByScore: GroupsMatchesByScore = ({ matches }) => {
  if (!matches || (isArray(matches) && matches.length === 0)) {
    return {};
  }
  return matches.reduce((accumulator: MatchesByScore, currentMatch: Match) => {
    const scoreSum =
      currentMatch &&
      currentMatch.length &&
      currentMatch[1].reduce(
        (acc: number, currentScore: number) => +acc + currentScore,
        0
      );

    if (!accumulator[scoreSum]) {
      accumulator[scoreSum] = [];
    }
    accumulator[scoreSum].push(currentMatch as never);

    return accumulator;
  }, {});
};

const getSortedKeys: GetSortedKeys = ({ matchesByScore }) => {
  if (!matchesByScore) {
    return [];
  }
  return Object.keys(matchesByScore).sort((a, b) => +b - +a);
};

const orderMatchesByScore: OrderMatchesByScore = ({
  sortedKeys,
  matchesByScore,
}) => {
  if (
    !sortedKeys ||
    !matchesByScore ||
    (isArray(sortedKeys) && sortedKeys.length === 0)
  ) {
    return [];
  }
  return sortedKeys.reduce((acc: Matches, currentKey: string) => {
    return [...acc, ...[...matchesByScore[currentKey]].reverse()];
  }, []);
};

const getMatchesSortedByScore: GetMatchesSortedByScore = (matches) => {
  const matchesByScore = groupsMatchesByScore({ matches });
  const sortedKeys = getSortedKeys({ matchesByScore });
  return orderMatchesByScore({ sortedKeys, matchesByScore });
};

export {
  groupsMatchesByScore,
  getSortedKeys,
  orderMatchesByScore,
  getMatchesSortedByScore,
};
