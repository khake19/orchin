import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../common/Sidebar/Sidebar';
import { AppWrapper, AppMainContent } from '../common/Layout/Layout';
import Contents from './Contents';

class Home extends Component {
  changeTab = tabName => {
    const { tabChange } = this.props;
    tabChange(tabName);
  };

  render() {
    const {
      ui: { activeTab }
    } = this.props;
    return (
      <AppWrapper>
        <Sidebar activeTab={activeTab} changeTab={this.changeTab} />
        <AppMainContent>
          <Contents {...this.props} />
        </AppMainContent>
      </AppWrapper>
    );
  }
}

Home.propTypes = {
  // ui: PropTypes.shape({ activeTab: PropTypes.string }),
  tabChange: PropTypes.func.isRequired
};
export default Home;
