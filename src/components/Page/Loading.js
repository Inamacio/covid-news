import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Skeleton from 'react-loading-skeleton';
import AboutBlog from '../Sidebar/AboutBlog';
import OpenSourse from '../Sidebar/OpenSourse';

function LoadingSkeleton() {
  return (<div style={{ fontSize: 20, lineHeight: 2 }}>
    <h1><Skeleton /></h1>
    <p><Skeleton count={4} /></p>
  </div>);
}

export default function Loading() {
  return (
    <Fragment>
      <LoadingSkeleton />
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <LoadingSkeleton />
        </Grid>
        <Grid item xs={12} md={6}>
          <LoadingSkeleton />
        </Grid>
      </Grid>
      <Grid container spacing={5}>
        <Grid item xs={12} md={8}>
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
        </Grid>
        <Grid item xs={12} md={4}>
          <AboutBlog />
          <OpenSourse />
        </Grid>
      </Grid>
    </Fragment>
  );
}