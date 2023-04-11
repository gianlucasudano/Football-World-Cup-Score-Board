import { memo, useMemo } from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import type { Match, Matches } from 'pages/Home';
import { getMatchesSortedByScore } from './helpers';
import BoxAlert, { type BoxAlertProps } from './elements/BoxAlert';

const MemoizedMatch = memo(function MatchItem({ match }: { match: Match }) {
  return (
    <ListItem divider>
      <ListItemText>
        <Typography variant="body2">
          {`${match[0][0]} - ${match[0][1]}`}
        </Typography>
      </ListItemText>
      <ListItemSecondaryAction>
        <Typography variant="body2">
          {`${match[1][0]} - ${match[1][1]}`}
        </Typography>
      </ListItemSecondaryAction>
    </ListItem>
  );
});

const infoArlert: BoxAlertProps = {
  severity: 'info',
  message: 'There are no matches available.',
};

function ScoreBoard({ matches }: { matches: Matches }) {
  const theme = useTheme();
  const sortedMatches = useMemo(
    () => getMatchesSortedByScore(matches),
    [matches]
  );
  return (
    <Paper elevation={3}>
      <Stack gap={2} mt={2} mb={2} padding={4}>
        <List>
          <ListItem
            disablePadding
            sx={{ borderBottom: `${theme.spacing(0.2)} solid` }}
          >
            <Typography
              component="h1"
              variant="h6"
              sx={{ fontWeight: theme.typography.fontWeightBold }}
            >
              Football World Cup Score Board
            </Typography>
          </ListItem>
          {sortedMatches &&
            sortedMatches.length > 0 &&
            sortedMatches.map((match) => (
              <MemoizedMatch
                key={`${match[0][0]}${match[0][1]}`}
                match={match}
              />
            ))}
        </List>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {matches && matches.length === 0 && <BoxAlert {...infoArlert} />}
      </Stack>
    </Paper>
  );
}

export default ScoreBoard;
