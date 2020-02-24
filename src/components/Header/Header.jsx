import styled from 'styled-components';

const Header = styled.header`
  padding: 0 20px 0 20px;
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.header.background};
  align-items: center;
`;

export default Header;
