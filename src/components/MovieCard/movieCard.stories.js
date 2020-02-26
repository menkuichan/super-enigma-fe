import React from 'react';
import { storiesOf } from '@storybook/react';
import MovieCard from '.';

storiesOf('MovieCard', module)
  .add('default', () => <MovieCard />);
