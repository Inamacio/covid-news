import React from 'react';
import { Typography, Link } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <Link color="inherit" href="https://github.com/Inamacio/covid-news">
        <GitHubIcon /> <br></br>
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}