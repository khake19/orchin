import React from 'react';
import {
  TableStyle,
  THeadStyle,
  TBodyStyle,
  THStyle,
  TRStyle,
  TDStyle
} from './TableStyle';
// Components
const Table = ({ children, ...rest }) => (
  <TableStyle {...rest}>{children}</TableStyle>
);

const THead = ({ children, ...rest }) => (
  <THeadStyle {...rest}>{children}</THeadStyle>
);

const TBody = ({ children, ...rest }) => (
  <TBodyStyle {...rest}>{children}</TBodyStyle>
);

const TH = ({ children, ...rest }) => <THStyle {...rest}>{children}</THStyle>;

const TR = ({ children, ...rest }) => <TRStyle {...rest}>{children}</TRStyle>;

const TD = ({ children, ...rest }) => <TDStyle {...rest}>{children}</TDStyle>;

export { Table, THead, TBody, TH, TR, TD };
