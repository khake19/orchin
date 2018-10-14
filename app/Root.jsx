// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import HomeContainer from './home/HomeContainer';

type Props = {
  store: {},
  history: {}
};

export default class Root extends Component<Props> {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <HomeContainer />
        </ConnectedRouter>
      </Provider>
    );
  }
}
