import React from 'react';
import { redirectTo } from '@reach/router';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  headline: {
    color: '#2B4779',
    textAlign: 'center',
  },
});

const Confirmation = () => {
  const isAllowed = localStorage.getItem('step2');
  if (!isAllowed) {
    redirectTo('/');
  }

  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.headline}>
        Your checkin is confirmed! Enjoy your flight{' '}
        <span role="img" aria-label="airplane emoji">
          🛫
        </span>
      </h1>
    </div>
  );
};

export default Confirmation;
