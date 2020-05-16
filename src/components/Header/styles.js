import { Button, MenuItem } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { createMuiTheme, withStyles, makeStyles } from '@material-ui/core/styles';

export const BlueColorButton = withStyles((theme) => ({
  root: {
    color: '#1a73e8',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#e8f0fe',
      color: blue,
    },
  },
}))(Button);


export const blueTheme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

export const buttonHeaderUseStyles = makeStyles((theme) => ({
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export const headerUseStyles = makeStyles(() => ({
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
}));

export const toolbarLinkUseStyles = makeStyles((theme) => ({
  toolbarLink: {
    padding: theme.spacing(1),
  },
}));

export const ItemMenu = withStyles(() => ({
  root: {
    color: '#1a73e8',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: '#e8f0fe',
      color: blue,
      textDecoration: 'none'
    },
  },
}))(MenuItem);

export const titleHeaderTheme = createMuiTheme({
  typography: {
    fontWeight: 'bold',
  },
});

export const titleHeaderUseStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
    fontSize: '2rem',
    color: 'black',
  }
}));
