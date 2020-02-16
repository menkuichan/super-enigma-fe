import { connect } from 'react-redux';

import { loadMovies } from '../../../store/actions/movies';

import Component from './MoviesView';

const mapStateToProps = ({
  movies: { data },
}) => ({
  movies: data,
});
const mapDispatchToProps = {
  loadMovies,
};


export const MoviesView = connect(mapStateToProps, mapDispatchToProps)(Component);

export default MoviesView;
