import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';
import Header from '../common/Header/Header';
import { PageWrapper, PageContent } from '../common/Layout/Layout';
import { Table, THead, TBody, TH, TR } from '../common/Table/Table';
import UserDetail from './UserDetail';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
  }

  componentDidMount() {
    const { getEmployees } = this.props;
    getEmployees({ pageNumber: 1, search: '' });
  }

  handlePageChange(pageNumber) {
    const { getEmployees } = this.props;
    this.setState({ activePage: pageNumber });
    getEmployees({ pageNumber, search: '' });
  }

  render() {
    const { employees } = this.props;
    const { activePage } = this.state;
    return (
      <PageWrapper>
        <Header title="all users" />
        <PageContent>
          <Table hasBorders bg>
            <THead>
              <TR>
                <TH>fullname</TH>
                <TH>age</TH>
                <TH>gender</TH>
                <TH actions>actions</TH>
              </TR>
            </THead>
            <TBody>
              {employees.result.map(employee => (
                <UserDetail key={employee.id} employee={employee} />
              ))}
            </TBody>
          </Table>
          <Pagination
            itemClass="page-item"
            linkClass="page-link"
            innerClass="pagination justify-content-center"
            firstPageText={<i className="ion-ios-rewind" />}
            lastPageText={<i className="ion-ios-fastforward" />}
            prevPageText={<i className="ion-ios-skipbackward" />}
            nextPageText={<i className="ion-ios-skipforward" />}
            activePage={activePage}
            itemsCountPerPage={employees.limit}
            totalItemsCount={employees.total}
            pageRangeDisplayed={5}
            onChange={::this.handlePageChange}
          />
        </PageContent>
      </PageWrapper>
    );
  }
}

UserList.propTypes = {
  getEmployees: PropTypes.func.isRequired,
  employees: PropTypes.shape().isRequired
};

export default UserList;
