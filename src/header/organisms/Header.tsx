import { Box } from '@mui/material';
import React from 'react';
import HeaderButtons from '../molecules/HeaderButtons';
import { makeStyles } from 'tss-react/mui';
import Link from 'next/link';

// Components
import LogoSvg from '../atoms/LogoSvg';
// Other
import { ROUTES } from '../../constants/Routes';

const Header = () => {
  const { classes } = useStyles();
  return (
    <>
      <Box className={classes.emptySpace}></Box>
      <Box component={'header'} className={classes.headerWrapper}>
        <Link href={ROUTES.MAP}>
          <LogoSvg />
        </Link>
        <HeaderButtons />
      </Box>
    </>
  );
};

export default Header;

const useStyles = makeStyles()(theme => ({
  headerWrapper: {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    zIndex: '1',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: `${theme.spacing(2.5)} ${theme.spacing(5)}`,
    border: '0.5px solid rgba(0,0,0,0.05)',
    backgroundColor: '#fff',
  },
  emptySpace: {
    height: '74px',
  },
}));
