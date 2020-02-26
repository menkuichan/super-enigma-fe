import React from 'react';
import { storiesOf } from '@storybook/react';
import TextFieldExample from './Text.field.example';

storiesOf('TextField', module)
  .add('default', () => <TextFieldExample />); // eslint-disable-line
