import { connect } from 'react-redux';
import { loadMovies, setQuery } from '../../store/actions/movies';
import Component from './Layout';

const mapStateToProps = ({
  movies: { data },
  query,
}) => ({
  movies: data,
  query,
});
const mapDispatchToProps = {
  loadMovies,
  setQuery,
};


export const Layout = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Layout;
