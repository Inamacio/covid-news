import React from 'react';
import { Link } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { BlueColorButton, blueTheme, buttonHeaderUseStyles } from './styles';

export default function ButtonHeader(props) {
  const { title, setParamSearch, search } = props;
  const classes = buttonHeaderUseStyles();

  return (
    <Link
      color="inherit"
      noWrap
      key={title}
      variant="body2"
      onClick={() => setParamSearch(search)}
      className={classes.toolbarLink}
      style={{ textDecoration: 'none' }}
    >
      <ThemeProvider theme={blueTheme}>
        <BlueColorButton color="primary">{title}</BlueColorButton>
      </ThemeProvider>

    </Link>
  );
}