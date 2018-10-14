import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideBar = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 80px;
  min-width: 80px;
  max-width: 80px;
  background: #2c323a;
`;

export const Tab = styled(Link)`
  position: relative;
  color: white;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  line-height: 1.5;
  text-decoration: none;
  height: 60px;
  &:hover {
    color: white;
    text-decoration: none;
  }
`;

export const Icon = styled.i`
  ${({ id }) => id === 'form' && `color: #6bbb69;`};
  ${({ id }) => id === 'contacts' && `color: #469fe5;`};
  ${({ id }) => id === 'settings' && `color: #C4C8CC;`};
  ${({ id }) => id === 'invoices' && `color: #cbc189;`};
`;

export const ActiveIndicator = styled.div`
  height: ${({ allTabsLength }) => allTabsLength * 60}px;
  width: 5px;
  position: absolute;
  > div {
    position: absolute;
    background: #292b2c;
    width: 80px;
    border-left: 5px solid #469fe5;
  }
`;
