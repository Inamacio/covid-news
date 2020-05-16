import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Grid, Container, Paper } from '@material-ui/core';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Page/Home';

const useStylesHeader = makeStyles((theme) => ({
  mainGrid: {
    marginBottom: theme.spacing(3),
  },
}));

export default function Blog() {
  const [search, setSearch] = useState('covid-19');

  const style = useStylesHeader();

  function setParamSearch(param) {
    setSearch(param);
  };

  function renderComponent() {
    return (
      <Fragment>
        <CssBaseline />
        <Grid className={style.mainGrid}>
          <Paper elevation={5}>
            <Header setParamSearch={setParamSearch} />
          </Paper>
        </Grid>

        <Container maxWidth="lg">
          <Home paramSearch={search} />
        </Container>
        <Footer title="#stayAtHome" description="Project Open Source ♥" />
      </Fragment>
    );
  }

  return renderComponent()
}