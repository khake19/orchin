import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../common/Sidebar/Sidebar';
// import Header from "../common/Header/Header";
// import Footer from "../common/Footer/Footer";
import { AppWrapper } from '../common/Layout/Layout';
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
        <Contents {...this.props} />
      </AppWrapper>
    );
  }
}

Home.propTypes = {
  ui: PropTypes.string.isRequired,
  tabChange: PropTypes.func.isRequired
};
export default Home;
