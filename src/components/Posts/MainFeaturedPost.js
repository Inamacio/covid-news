import React from 'react';
import { Paper, Typography, Grid, Link } from '@material-ui/core';
import { ButtonPrimaryMainFeaturedPost, useStylesMainFeaturedPostButtonPrimary } from './style';

export default function MainFeaturedPost(props) {
  const { post } = props;

  const classes = useStylesMainFeaturedPostButtonPrimary();

  return (
    <Paper style={{ backgroundImage: "url('" + post.imageUrl + "')" }} className={classes.mainFeaturedPost}  >
      {<img style={{ display: 'none' }} src={post.imageUrl} alt={post.title} />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={12}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.description}
            </Typography>
            <Link style={{ textDecoration: 'none' }} variant="subtitle1" color="inherit" gutterBottom href={post.url} target="_blank">
              <ButtonPrimaryMainFeaturedPost variant="contained" color="primary">
                <strong>Read more...</strong>
              </ButtonPrimaryMainFeaturedPost>
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}