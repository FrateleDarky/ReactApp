import { Select, MenuItem, SelectChangeEvent, Typography } from '@mui/material';
import React, { useState } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { makeStyles } from 'tss-react/mui';

// Components
import SelectIcon from './SelectIcon';

// Actions
//import { changeLanguage } from '../../../utils/languages';

// Other resources
//import enFlag from '../../../assets/images/en.png';
//import roFlag from '../../../assets/images/ro.png';
//import huFlag from '../../../assets/images/hu.png';
//import * as languages from '../../../constants/Languages';

const SelectLanguage = () => {
  const { t } = useTranslation();
  const { classes } = useStyles();
  //const { ENGLISH, ROMANIAN, HUNGARIAN } = languages;

  const currentLanguage = i18next.language;
  const [language, setLanguage] = useState<string>(currentLanguage);

  /*const handleChange = (event: SelectChangeEvent) => {
    const newLanguage = event.target.value;
    changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };*/

  return (
    <Select
      variant="standard"
      value={language}
      //onChange={handleChange}
      IconComponent={SelectIcon}
      className={classes.select}
      inputProps={{ className: classes.input }}
    >
      <MenuItem  className={classes.menuItem}>
        
        <Typography variant="body1" className={classes.text}>
          {t('english')}
        </Typography>
      </MenuItem>
      <MenuItem  className={classes.menuItem}>

        <Typography variant="body1" className={classes.text}>
          {t('hungarian')}
        </Typography>
      </MenuItem>
      <MenuItem  className={classes.menuItem}>
    
        <Typography variant="body1" className={classes.text}>
          {t('romanian')}
        </Typography>
      </MenuItem>
    </Select>
  );
};

export default SelectLanguage;

const useStyles = makeStyles()(theme => ({
  select: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    border: 'none',
    '&:before': {
      borderBottom: 'none',
    },
    '&:after': {
      borderBottom: 'none',
    },
    '&:focus': {
      borderBottom: 'none',
    },
    '&:hover': {
      borderBottom: 'none',
    },
    '&:hover:not(.Mui-disabled):before': {
      borderBottom: 'none',
    },
    '& .MuiSelect-icon': {
      top: '12px',
      width: '10px',
      height: '6.25px',
    },
  },
  input: {
    '&&&': {
      paddingRight: theme.spacing(2.25),
    },
    '&:focus': {
      backgroundColor: 'inherit',
    },
  },
  menuItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: '0 auto',
  },
  icon: {
    width: '18px',
    height: '12px',
  },
  img: {
    marginRight: theme.spacing(1.25),
  },
  text: {
    display: 'inline',
    fontWeight: '600',
  },
}));
