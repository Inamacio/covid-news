import React from 'react';
import { Container, Typography, Paper } from '@material-ui/core';
import Copyright from './Copyright';
import useStyles from './style';

export default function Footer(props) {
  const style = useStyles();

  const { description, title } = props;

  return (
    <Paper elevation={24}>
      <footer className={style.footer}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            {title}
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            {description}
          </Typography>
          <Copyright />
        </Container>
      </footer>
    </Paper>
  );
}