import React from 'react';
import { storiesOf } from '@storybook/react';
import Tag from './Tag';

const genres = ['adventure'];

storiesOf('Tag', module)
  .add('default', () => <Tag genres={genres} label="horror" />)
  .add('selected', () => <Tag genres={genres} label="adventure" />);
