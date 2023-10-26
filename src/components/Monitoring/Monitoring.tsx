import React from 'react';
import { makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    height: 900,
    position: 'relative',
    width: '100%',
  },
});

export const Monitoring = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.card}>
      <iframe
        title="Embed Url"
        src='https://app.powerbi.com/reportEmbed?reportId=dd063ae6-a732-41ac-90e7-94d650d86716&autoAuth=true&ctid=40efe5ba-ccb1-47ee-8ed5-9e9dce942cbf'
        style={{
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          borderRadius: '4px',
        }}
      />
    </Paper>
  );
};
