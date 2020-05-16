import React from 'react';
import { Grid, Typography, Divider } from '@material-ui/core';
import Post from './Post';
import Box from '@material-ui/core/Box';

export default function MainPost(props) {
  const { posts, title } = props;

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post, index) => (
        <Box key={index} mb={3}>
          <Post post={post} />
        </Box>
      ))}
    </Grid>
  );
}