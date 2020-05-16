import { Menu, Link } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import getRegions from '../../util/regions';
import { BlueColorButton, blueTheme, toolbarLinkUseStyles, ItemMenu } from './styles';

const ITEM_HEIGHT = 100;

const regions = getRegions();

export default function MenuHeader(props) {
  const { title, setParamSearch } = props;

  const classes = toolbarLinkUseStyles();

  const [anchorEl, setAnchorEl] = useState();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl();
  };

  return (
    <Fragment>
      <ThemeProvider theme={blueTheme}>
        <BlueColorButton
          aria-controls={open ? 'menu-list-grow' : undefined}
          onClick={handleClick}
          color="inherit"
          className={classes.toolbarLink}
        >
          {title}
        </BlueColorButton>
      </ThemeProvider>

      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '25ch',

          },
        }}
      >
        {regions.map((option) => (
          <Link key={option.uf} style={{ textDecoration: 'none' }} onClick={handleClose} >
            <ItemMenu onClick={() => setParamSearch(`covid-19 ${option.name}`)}>
              {option.name}
            </ItemMenu>
          </Link>

        ))}
      </Menu>
    </Fragment>
  );
}