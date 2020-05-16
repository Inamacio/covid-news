import React, { Fragment } from 'react';
import { Toolbar, Container } from '@material-ui/core';
import ButtonHeader from './ButtonHeader';
import TitleHeader from './TitleHeader';
import MenuHeader from './MenuHeader';
import { headerUseStyles } from './styles';

export default function Header(props) {
  const classes = headerUseStyles();

  const { setParamSearch } = props;

  return (
    <Fragment>
      <TitleHeader title='Covid News' />
      <Container maxWidth="lg">
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          <ButtonHeader setParamSearch={setParamSearch} search={'covid-19'} title='Top news' />
          <ButtonHeader setParamSearch={setParamSearch} search={'noticias internacionais sobre covid-19'} title='Word' />
          <MenuHeader setParamSearch={setParamSearch} title='Regions' />
        </Toolbar>
      </Container>
    </Fragment>
  );  
}
