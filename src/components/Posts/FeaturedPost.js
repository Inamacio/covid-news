import React from 'react';
import Grid from '@material-ui/core/Grid';
import Post from './Post'

export default function FeaturedPost(props) {
  const { post } = props;

  return (
    <Grid item xs={12} md={12}>
      <Post post={post} />
    </Grid>
  );
}