// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styled from 'styled-components';

const ErrorLabel = styled.div`
  color: #f75858;
  margin: 0.5rem 0 0 0.5rem;
  font-size: 12px;
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const AppMainContent = styled.div`
  overflow: auto;
  width: 100%;
  height: 100%;
  background: #f9fafa;
`;

const PageWrapper = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const PageContent = styled.div`
  // flex: 1;
  // overflow: hidden;
  margin: 90px 40px 40px 40px;
  ${props =>
    !props.bare &&
    `
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 4px;
    background: #FFF;
  `};
`;

const PageFooter = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  background: #f9fafa;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;
export {
  AppWrapper,
  AppMainContent,
  ErrorLabel,
  PageWrapper,
  PageContent,
  PageFooter
};
