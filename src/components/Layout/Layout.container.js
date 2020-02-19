import { connect } from 'react-redux';
import Component from './Layout';

const mapStateToProps = ({
  movies: { data },
  query,
}) => ({
  movies: data,
  query,
});

export const Layout = connect(mapStateToProps)(Component);

export default Layout;
