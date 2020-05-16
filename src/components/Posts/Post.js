import React from 'react';
import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Hidden
} from '@material-ui/core';
import { featuredPostStyle } from './style';

export default function Post(props) {
  const classes = featuredPostStyle();

  const { post } = props;

  return (
    <CardActionArea component="a" href={post.url} target="_blank">
      <Card className={classes.card}>
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
        <Hidden xsDown>
          <CardMedia className={classes.cardMedia} image={post.imageUrl} title={post.title} />
        </Hidden>
      </Card>
    </CardActionArea>
  );
}
