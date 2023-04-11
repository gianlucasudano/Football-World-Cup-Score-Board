import { expect, describe, it } from 'vitest';

import {
  matches,
  matchesGroupedByScore,
  matchesSortedByScore,
  sortedKeys,
} from 'mocks/scoreBoard';
import {
  getMatchesSortedByScore,
  getSortedKeys,
  groupsMatchesByScore,
  orderMatchesByScore,
} from './helpers';

describe('groupsMatchesByScore', () => {
  it('returns an object of matches grouped by score', () => {
    expect(groupsMatchesByScore({ matches })).toStrictEqual(
      matchesGroupedByScore
    );
  });

  it('returns an empty object if matches is undefined', () => {
    expect(groupsMatchesByScore({ matches: undefined })).toStrictEqual({});
  });

  it('returns an empty object if matches is an empty array', () => {
    expect(groupsMatchesByScore({ matches: [] })).toStrictEqual({});
  });
});

describe('getSortedKeys', () => {
  it('returns a sorted array of keys', () => {
    expect(
      getSortedKeys({
        matchesByScore: matchesGroupedByScore,
      })
    ).toStrictEqual(sortedKeys);
  });

  it('returns an empty array if matchesByScore is undefined', () => {
    expect(
      getSortedKeys({
        matchesByScore: undefined,
      })
    ).toStrictEqual([]);
  });
});

describe('orderMatchesByScore', () => {
  it('returns a sorted array of matches', () => {
    expect(
      orderMatchesByScore({ sortedKeys, matchesByScore: matchesGroupedByScore })
    ).toStrictEqual(matchesSortedByScore);
  });

  it('returns an empty array if matchesByScore is undefined', () => {
    expect(
      orderMatchesByScore({ sortedKeys, matchesByScore: undefined })
    ).toStrictEqual([]);
  });

  it('returns an empty array if sortedKeys is undefined', () => {
    expect(
      orderMatchesByScore({
        sortedKeys: undefined,
        matchesByScore: matchesGroupedByScore,
      })
    ).toStrictEqual([]);
  });

  it('returns an empty array if sortedKeys is an empty array', () => {
    expect(
      orderMatchesByScore({
        sortedKeys: [],
        matchesByScore: matchesGroupedByScore,
      })
    ).toStrictEqual([]);
  });
});

describe('getMatchesSortedByScore', () => {
  it('returns a sorted array of matches', () => {
    expect(getMatchesSortedByScore(matches)).toStrictEqual(
      matchesSortedByScore
    );
  });

  it('returns an empty array if matches is an empty array', () => {
    expect(getMatchesSortedByScore([])).toStrictEqual([]);
  });

  it('returns an empty array if matches is undefined', () => {
    expect(getMatchesSortedByScore(undefined)).toStrictEqual([]);
  });
});
