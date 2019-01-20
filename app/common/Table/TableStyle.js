// Styles
import styled from 'styled-components';

export const TableStyle = styled.table`
  width: 100%;
  ${props =>
    props.hasBorders &&
    `
    tr {
      border-bottom: 1px solid rgba(0,0,0,.1);
      &:last-child {
        border-bottom: none;
      }
    }
  `};
  ${props => props.sm && `tr { height: 36px }`};
  ${props => props.md && `tr { height: 42px }`};
  ${props => props.bg && `tr { height: 56px }`};
`;

export const THeadStyle = styled.thead`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

export const TBodyStyle = styled.tbody`
  display: flex;
  flex-direction: column;
  tr {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const THStyle = styled.th`
  text-transform: uppercase;
  font-size: 12px;
  color: #4f555c;
  letter-spacing: 1px;
  font-weight: 600;
  flex: 1;
  ${props =>
    props.actions &&
    `
    flex: none;
    width: 60px;
    justify-content: space-between;
  `};
`;

export const TRStyle = styled.tr`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: space-between;
  align-items: center;
`;

export const TDStyle = styled.td`
  font-size: 14px;
  flex: 1;
  color: #4f555c;
  height: 100%;
  display: flex;
  align-items: center;
  ${props => props.bold && `font-weight: 600;`};
  ${props => props.success && `color: #6BBB69;`};
  ${props => props.primary && `color: #469FE5;`};
  ${props => props.warning && `color: #F9D548;`};
  ${props => props.danger && `color: #EC476E;`};
  ${props => props.muted && `color: #B4B7BA;`};
  ${props =>
    props.actions &&
    `
    flex: none;
    width: 60px;
    justify-content: space-between;
  `};
`;
