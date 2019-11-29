import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { AppTab } from '../features/app/app-types';

type AppTabsProps = {
  onChangeTab: (tab: AppTab) => any;
  currentTab: AppTab;
};

const AppTabs: React.FC<AppTabsProps> = ({ currentTab, onChangeTab }) => (
  <AppBar position="static" color="default">
    <Tabs
      value={currentTab.valueOf()}
      onChange={(e, v) => {
        onChangeTab(v);
      }}
      indicatorColor="primary"
      textColor="primary"
      variant="fullWidth"
      aria-label="app-tabs"
    >
      <Tab label="Cards" id="tab-cards" />
      <Tab label="Decks" id="tab-decks" disabled={true} />
    </Tabs>
  </AppBar>
);

export default AppTabs;
