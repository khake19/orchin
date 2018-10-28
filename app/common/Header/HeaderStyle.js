import styled from 'styled-components';

const PageHeader = styled.div`
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

const PageHeaderTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  letter-spacing: -0.5px;
`;

const PageHeaderActions = styled.div`
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

export { PageHeader, PageHeaderTitle, PageHeaderActions };
