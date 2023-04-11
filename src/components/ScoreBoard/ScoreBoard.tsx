import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { getMatchesSortedByScore, type Matches } from './helpers';

function ScoreBoard({ matches }: { matches: Matches }) {
  const theme = useTheme();
  const sortedMatches = getMatchesSortedByScore(matches);
  return (
    <Paper elevation={3}>
      <Stack gap={2} mt={2} mb={2} padding={4}>
        <List>
          <ListItem
            disablePadding
            sx={{ borderBottom: `${theme.spacing(0.2)} solid` }}
          >
            <Typography
              component="h2"
              variant="h6"
              sx={{ fontWeight: theme.typography.fontWeightBold }}
            >
              Football World Cup Score Board
            </Typography>
          </ListItem>
        </List>
        <div>{JSON.stringify(sortedMatches, null, 2)}</div>
      </Stack>
    </Paper>
  );
}

export default ScoreBoard;
