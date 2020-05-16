import { blue } from '@material-ui/core/colors';
import { Button } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

export const ButtonPrimaryMainFeaturedPost = withStyles(() => ({
  root: {
    fontWeight: 'bold',
    backgroundColor: '#5d78ff',
    '&:hover': {
      backgroundColor: blue[500],
      transform: 'scale(1.1)',
    },
  },
}))(Button);

export const useStylesMainFeaturedPostButtonPrimary = makeStyles((theme) => ({
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

export const featuredPostStyle = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});