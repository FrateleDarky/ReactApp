import { Box, Divider } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';

// Components
//import LogoutButton from '../../logout/atoms/LogoutButton';
import SelectLanguage from '../atoms/SelectLanguage';

const HeaderButtons = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.wrapper}>
      <SelectLanguage />
      <Divider orientation="vertical" className={classes.divider} />
    
    </Box>
  );
};

export default HeaderButtons;

const useStyles = makeStyles()(theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    margin: `0 ${theme.spacing(3.5)}`,
    height: '32px',
  },
}));
