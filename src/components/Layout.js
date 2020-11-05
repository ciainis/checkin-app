import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    fontFamily: 'Roboto, sans',
    backgroundColor: '#F4F4F4',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&>div': {
      width: '100%',
      maxWidth: '300px',
      padding: '1rem',
    },
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
};

export default Layout;
