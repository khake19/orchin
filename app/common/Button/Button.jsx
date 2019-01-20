import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyle, ButtonsGroupStyle } from './ButtonStyle';

const Button = ({ children, link, ...props }) =>
  link ? (
    <ButtonStyle {...props}>{children}</ButtonStyle>
  ) : (
    <ButtonStyle {...props}>{children}</ButtonStyle>
  );

Button.propTypes = {
  children: PropTypes.node.isRequired
};

export const ButtonsGroup = ({ children }) => (
  <ButtonsGroupStyle>{children}</ButtonsGroupStyle>
);

ButtonsGroup.propTypes = {
  children: PropTypes.node.isRequired
};

export default Button;
