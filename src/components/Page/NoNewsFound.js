import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AboutBlog from '../Sidebar/AboutBlog';
import OpenSourse from '../Sidebar/OpenSourse';
import img from '../../assets/img/no-results-page.png'
import Post from '../Posts/Post';

const gov = [
  {
    "url": "https://covid.saude.gov.br/",
    "title": "Coronavírus Brasil",
    "siteName": "covid.saude.gov.br",
    "description": "Notícias do Ministério da saúde",
    "imageUrl": "https://covid.saude.gov.br/assets/imgs/Favicon.png",
  },
  {
    "url": "https://coronavirus.saude.gov.br/",
    "title": "O QUE VOCÊ PRECISA SABER",
    "siteName": "Ministério da saúde",
    "description": "O que você precisa saber e como prevenir o contágio",
    "imageUrl": "https://portalarquivos.saude.gov.br/images/png/2020/April/14/logo.png",
  },
];

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: theme.palette.common.black
  },

  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.4)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function NotNewsFound() {
  const classes = useStyles();

  return (
    <Fragment>
      <Paper style={{ backgroundImage: "url('" + img + "')" }} className={classes.mainFeaturedPost}  >
        <div className={classes.overlay} />
        <Grid container>
          <Grid item md={12}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                Ops. <br /> Foi mal não foi encontrado nenhum resultado :(
            </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                Tente novamente em instantes combinado ?
            </Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>
      <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
          <Post post={gov[0]} />
        </Grid>
        <Grid item xs={12} md={6}>
        <Post post={gov[1]} />
        </Grid>
        <Grid item xs={12} md={6}>
          <AboutBlog />
        </Grid>
        <Grid item xs={12} md={6}>
          <OpenSourse />
        </Grid>
        
      </Grid>
    </Fragment>
  );
}