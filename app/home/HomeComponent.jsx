import React, { Component } from 'react';
import Sidebar from '../common/Sidebar/Sidebar.jsx';
// import Header from "../common/Header/Header";
// import Footer from "../common/Footer/Footer";
// import Sidebar from "../common/Sidebar/Sidebar";
import { AppWrapper } from '../common/Layout/Layout';

export default class Home extends Component {
    changeTab = (tabName) => this.props.tabChange(tabName)
    render() {
        return(
            <AppWrapper>
                <Sidebar activeTab={this.props.ui.activeTab} changeTab={this.changeTab}  />
            </AppWrapper>
        ) 
    }
}
