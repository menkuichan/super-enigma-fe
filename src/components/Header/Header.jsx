import PropTypes from 'prop-types';

import styled from 'styled-components';

const Header = styled.header`
  padding: 0 20px 0 20px;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.main.color};
  align-items: center;
`;

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
