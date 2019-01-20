import React, { Component } from 'react';
import UserForm from './UserForm';
import Header from '../common/Header/Header';
import { PageWrapper, PageContent } from '../common/Layout/Layout';

class UserComponent extends Component {
  render() {
    return (
      <PageWrapper>
        <Header title="user" />
        <PageContent>
          <UserForm />
        </PageContent>
      </PageWrapper>
    );
  }
}

export default UserComponent;
