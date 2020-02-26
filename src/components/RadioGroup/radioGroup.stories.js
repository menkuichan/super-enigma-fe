import React from 'react';
import { storiesOf } from '@storybook/react';
import RadioGroupExample from './RadioGroup.example';

storiesOf('Filter', module)
  .add('default', () => <RadioGroupExample />); // eslint-disable-line
