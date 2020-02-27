import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '.';

storiesOf('Button', module)
  .add('default', () => <Button label="Button" />)
  .add('secondary', () => <Button label="Button" type="secondary" />);
