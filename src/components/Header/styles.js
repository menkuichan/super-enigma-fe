import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  padding: 0 20px 0 20px;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.main.color};
  align-items: center;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;
