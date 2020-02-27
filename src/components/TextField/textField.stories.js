import React from 'react';
import { storiesOf } from '@storybook/react';
import TextFieldExample from './TextField.example';

storiesOf('TextField', module)
  .add('default', () => <TextFieldExample />);
