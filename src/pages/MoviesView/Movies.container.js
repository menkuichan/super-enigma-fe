import { connect } from 'react-redux';
import Component from './Movies';

const mapStateToProps = ({
  movies: { data },
  query,
}) => ({
  movies: data,
  query,
});

export const MoviesView = connect(mapStateToProps)(Component);

export default MoviesView;
