import React, { useState, useEffect, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import MainFeaturedPost from '../Posts/MainFeaturedPost';
import FeaturedPost from '../Posts/FeaturedPost';
import MainPost from '../Posts/MainPost';
import AboutBlog from '../Sidebar/AboutBlog';
import OpenSourse from '../Sidebar/OpenSourse';
import search from '../../service';
import NotNewsFound from './NoNewsFound';
import Loading from './Loading';

export default function Home(pros) {
  const [isLoading, setIsLoading] = useState(false);

  const [posts, setPosts] = useState([]);

  const { paramSearch } = pros;

  async function getPosts() {
    setIsLoading(true);

    const posts = await search(paramSearch);

    setPosts(posts);

    if (posts) setIsLoading(false);
  }

  useEffect(() => {
    getPosts();
  }, [paramSearch]);

  const useStyles = makeStyles((theme) => ({
    mainGrid: {
      marginTop: theme.spacing(3),
    },
  }));

  const classes = useStyles();

  const subNews = posts.success ? posts.featureMainNews : [];

  const mainPost = posts.success ? posts.mainNews : {};

  function renderStatus() {
    if (isLoading) return <Loading />;

    if (!posts.success) return <NotNewsFound />;

    if (posts) return (
      <Fragment>
        <MainFeaturedPost post={mainPost} />
        <Grid container spacing={4}>
          {posts && subNews.map((post, index) => (
            <FeaturedPost key={index} post={post} />
          ))}
        </Grid>
        <Grid container spacing={5} className={classes.mainGrid}>
          <MainPost title="Stay informed" posts={posts.news} />
          <Grid item xs={12} md={4}>
            <AboutBlog />
            <OpenSourse />
          </Grid>
        </Grid>
      </Fragment>
    );
  }

  return renderStatus();
}
