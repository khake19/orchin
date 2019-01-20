// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styled from 'styled-components';

const AppWrapperStyle = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const AppMainContentStyle = styled.div`
  overflow: auto;
  width: 100%;
  height: 100%;
  background: #f9fafa;
`;

const PageWrapperStyle = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const PageHeaderStyle = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 10px 120px 10px 40px;
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const PageHeaderTitleStyle = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  letter-spacing: -0.5px;
`;

const PageHeaderActionsStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  button {
    margin-left: 10px;
  }
  i {
    margin-right: 10px;
  }
`;

const PageContentStyle = styled.div`
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

const PageFooterStyle = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  background: #f9fafa;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const ErrorLabelStyle = styled.span`
  font-size: 11px;
  font-weight: 600;
  margin: 0;
  letter-spacing: -0.5px;
  color: red;
`;

// Components
const AppWrapper = ({ children }) => (
  <AppWrapperStyle>{children}</AppWrapperStyle>
);
AppWrapper.propTypes = { children: PropTypes.shape().isRequired };

const AppMainContent = ({ children }) => (
  <AppMainContentStyle>{children}</AppMainContentStyle>
);
AppMainContent.propTypes = { children: PropTypes.shape().isRequired };

const ErrorLabel = ({ children }) => (
  <ErrorLabelStyle>{children}</ErrorLabelStyle>
);
ErrorLabel.propTypes = { children: PropTypes.shape().isRequired };

const PageWrapper = ({ children }) => (
  <PageWrapperStyle>{children}</PageWrapperStyle>
);
PageWrapper.propTypes = { children: PropTypes.shape().isRequired };

const PageHeader = ({ children }) => (
  <PageHeaderStyle>{children}</PageHeaderStyle>
);
PageHeader.propTypes = { children: PropTypes.shape().isRequired };

const PageHeaderTitle = ({ children }) => (
  <PageHeaderTitleStyle>{children}</PageHeaderTitleStyle>
);
PageHeaderTitle.propTypes = { children: PropTypes.shape().isRequired };

const PageHeaderActions = ({ children }) => (
  <PageHeaderActionsStyle>{children}</PageHeaderActionsStyle>
);
PageHeaderActions.propTypes = { children: PropTypes.shape().isRequired };

const PageContent = ({ children, bare }) => (
  <PageContentStyle bare={bare}>{children}</PageContentStyle>
);
PageContent.propTypes = {
  children: PropTypes.shape().isRequired,
  bare: PropTypes.bool.isRequired
};

const PageFooter = ({ children }) => (
  <PageFooterStyle>{children}</PageFooterStyle>
);
PageFooter.propTypes = { children: PropTypes.shape().isRequired };

export {
  AppWrapper,
  AppMainContent,
  ErrorLabel,
  PageWrapper,
  PageHeader,
  PageHeaderTitle,
  PageHeaderActions,
  PageContent,
  PageFooter
};
