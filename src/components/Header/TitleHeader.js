import React from 'react';
import { Toolbar, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { titleHeaderUseStyles, titleHeaderTheme } from './styles';

export default function TitleHeader(props) {
  const { title } = props;

  const classes = titleHeaderUseStyles();

  return (
    <Toolbar className={classes.toolbar}>
      <ThemeProvider theme={titleHeaderTheme}>
        <Typography
          component="h1"
          variant="h4"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
      </ThemeProvider>
    </Toolbar>
  );
}