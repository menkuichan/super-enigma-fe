import React from 'react';
import { storiesOf } from '@storybook/react';
import RadioGroupExample from './RadioGroup.example';

storiesOf('Radio', module)
  .add('default', () => <RadioGroupExample />); // eslint-disable-line
