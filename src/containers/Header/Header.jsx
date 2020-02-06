import React from 'react';

import HeaderTabs from '../../components/HeaderTabs';
import Logo from '../../components/Logo';

import { HeaderWrapper } from './style';

export class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ value });
  }

  render() {
    const { value } = this.state;
    return (
      <HeaderWrapper>
        <Logo />
        <HeaderTabs
          onClickTab={this.handleChange}
          value={value}
        />
      </HeaderWrapper>
    );
  }
}
export default Header;
