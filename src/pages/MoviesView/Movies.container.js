import { connect } from 'react-redux';
import { loadMovies } from '../../store/actions/movies';
import Component from './Movies';

const mapStateToProps = ({
  movies: { data },
  query,
}) => ({
  movies: data,
  query,
});
const mapDispatchToProps = {
  loadMovies,
};


export const MoviesView = connect(mapStateToProps, mapDispatchToProps)(Component);

export default MoviesView;
