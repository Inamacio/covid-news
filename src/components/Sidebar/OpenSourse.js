import React from 'react';
import Post from '../Posts/Post';
import img from '../../assets/img/theming-card.png';
import { Paper } from '@material-ui/core';
import { featuredSideBarStyle } from './style';

export default function OpenSourse() {
  const classes = featuredSideBarStyle();

  const post = {
    url: "https://github.com/Inamacio/covid-news",
    title: "Open Source",
    description: "This blog is a supporter of open source, also contributing :)",
    imageUrl: img,
  };

  return (
    <Paper className={classes.paper}>
      <Post post={post} ></Post>
    </Paper>
  );
}
