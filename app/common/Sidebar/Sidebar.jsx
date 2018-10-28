// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import { findIndex } from 'lodash';

// Animation
import { Motion, spring } from 'react-motion';

// Styled div
import { SideBar, Tab, Icon, ActiveIndicator } from './SidebarStyle';

const springConfig = {
  stiffness: 350,
  damping: 18,
  precision: 0.01
};

const setMarginValue = activeTab => {
  const multiplier = 100 / allTabs.length;
  const activeTabIndex = findIndex(allTabs, { name: activeTab });
  return activeTabIndex * multiplier;
};

const allTabs = [
  {
    title: 'Create',
    name: 'form',
    route: '/form',
    icon: 'ion-document-text'
  },
  {
    title: 'Invoices',
    name: 'invoices',
    route: '/invoices',
    icon: 'ion-ios-filing'
  },
  {
    title: 'Contacts',
    name: 'contacts',
    route: '/contacts',
    icon: 'ion-person-stalker'
  },
  {
    title: 'Settings',
    name: 'settings',
    route: '/settings',
    icon: 'ion-ios-gear'
  }
];

function AppNav({ activeTab, changeTab }) {
  const marginTopValue = setMarginValue(activeTab);
  const allTabsComponent = allTabs.map(tab => (
    <Tab key={tab.name} to={tab.route} onClick={() => changeTab(tab.name)}>
      <Icon id={tab.name} className={tab.icon} />
    </Tab>
  ));
  return (
    <SideBar>
      <div>
        <Motion style={{ marginTop: spring(marginTopValue, springConfig) }}>
          {({ marginTop }) => (
            <ActiveIndicator allTabsLength={allTabs.length}>
              <div
                style={{
                  height: `${100 / allTabs.length}%`,
                  top: `${marginTop}%`
                }}
              />
            </ActiveIndicator>
          )}
        </Motion>
        {allTabsComponent}
      </div>
    </SideBar>
  );
}

AppNav.propTypes = {
  activeTab: PropTypes.string.isRequired,
  changeTab: PropTypes.func.isRequired
};

export default AppNav;
