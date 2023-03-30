import { Card, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from 'tss-react/mui';

//Components
import NavigationMenu from '../molecules/NavigationMenu';

const Sidebar = () => {
  const { t } = useTranslation();
  const { classes } = useStyles();
  return (
    <Card className={classes.wrapper}>
      <Card className={classes.menuTitle}>
        <Typography variant="h4">{t('welcome')},</Typography>
        <Typography variant="body2">{t('welcome.secondary')}</Typography>
      </Card>
      <NavigationMenu />
    </Card>
  );
};

export default Sidebar;

const useStyles = makeStyles()(theme => ({
  wrapper: {
    height: '100vh',
    width: '240px',
    border: '.5px solid rgba(0,0,0,0.05)',
    borderTop: 'none',
    borderRadius: '0',
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
  },
  menuTitle: {
    padding: theme.spacing(4),
    paddingLeft: theme.spacing(5),
  },
}));
