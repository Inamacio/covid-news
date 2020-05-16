import React, { Fragment } from 'react';
import { Typography, Card, CardContent } from '@material-ui/core';
import { featuredSideBarStyle } from './style';

export default function AboutBlog() {
  const classes = featuredSideBarStyle();

  const post = {
    url: "",
    title: "About",
    description: "Find out how to get more information about Covid-19 from leading sites to deliver incredible content.",
  };

  return (
    <Fragment>
      <Card className={classes.paper}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {post.pubDate}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              <strong>{post.siteName}</strong>
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Fragment>
  );
}

