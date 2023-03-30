import { ListItem, SvgIcon, Typography } from '@mui/material';
import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { makeStyles } from 'tss-react/mui';
import Link from 'next/link';

interface NavigationProps {
  icon: ReactElement;
  name: string;
  link: string;
}

const NavigationItem = ({ icon, name, link }: NavigationProps) => {
  const location = useRouter();
  const isActive = location.pathname.includes(link);
  const { classes } = useStyles({ isActive });

  return (
    <Link href={link}>
      <ListItem className={classes.item}>
        <SvgIcon className={classes.icon}>{icon}</SvgIcon>
        <Typography variant="h5" className={classes.itemTitle}>
          {name}
        </Typography>
      </ListItem>
    </Link>
  );
};

export default NavigationItem;

const useStyles = makeStyles<{ isActive: boolean }>()((theme, { isActive }) => ({
  item: {
    display: 'flex',
    padding: '1em',
    paddingLeft: '2.5em',
    gap: '1em',
    width: '240px',
    height: '56px',
    cursor: 'pointer',
    backgroundColor: isActive ? theme.palette.info.main : 'none',
    '&::before': isActive
      ? {
          content: "''",
          position: 'absolute',
          width: '5px',
          height: '56px',
          backgroundColor: theme.palette.primary.main,
          left: '0',
          borderRadius: '0 6px 6px 0',
        }
      : {},
  },
  icon: {
    color: isActive ? theme.palette.text.secondary : theme.palette.text.primary,
  },
  itemTitle: {
    color: theme.palette.text.secondary,
    fontWeight: '600',
    lineHeight: '20px',
  },
}));
