import { List } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

// Components
import NavigationItem from '../atoms/NavigationItem';
import * as icons from '../atoms/NavigationIcons';

// Other resources
import { ROUTES } from '../../constants/Routes';

const NavigationMenu = () => {
  const { t } = useTranslation();
  return (
    <List>
      <NavigationItem icon={icons.map} name={t('map')} link={ROUTES.MAP} />
      <NavigationItem icon={icons.groups} name={t('groups')} link={ROUTES.GROUPS} />
      <NavigationItem icon={icons.users} name={t('users')} link={ROUTES.USERS} />
      <NavigationItem icon={icons.history} name={t('history')} link={ROUTES.HISTORY} />
    </List>
  );
};

export default NavigationMenu;
