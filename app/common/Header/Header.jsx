import React from 'react';
import PropTypes from 'prop-types';
import { capitalizeFirstLetter } from '../../utils';
import { PageHeader, PageHeaderTitle } from './HeaderStyle';

const Header = ({ title }) => (
  <PageHeader>
    <PageHeaderTitle>{capitalizeFirstLetter(title)}</PageHeaderTitle>
  </PageHeader>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
