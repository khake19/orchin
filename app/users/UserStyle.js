import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
  overflow: hidden;
  border-radius: 4px 4px 0 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const UsersHeader = styled.a`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: #2c323a;
  &:hover {
    text-decoration: none;
    color: #2c323a;
  }
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #4f555c;
  margin-bottom: 0px;
`;

const Part = styled.div`
  padding: 20px 20px 10px 20px;
  background: #f9fafa;
  border-radius: 4px;
  margin: 10px 0 20px 0;
  border: 1px solid #f2f3f4;
`;

const Section = styled.div`
  position: relative;
  display: block;
  margin-bottom: 30px;
  padding: 0 40px;
`;

const Row = styled.div`
  display: flex;
  margin: 0 -15px;
`;

const Fields = styled.div`
  flex: 1;
  margin: 0 15px 20px 15px;
`;
export { Wrapper, UsersHeader, Label, Part, Section, Row, Fields };
