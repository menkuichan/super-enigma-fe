import React from 'react';

import HeaderTabs from '../../components/HeaderTabs';
import Logo from '../../components/Logo';
import Search from '../../components/Search';

import { HeaderWrapper, SearchWrapper, TabsWrapper } from './style';

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
        <TabsWrapper>
          <Logo />
          <HeaderTabs
            onClickTab={this.handleChange}
            value={value}
          />
        </TabsWrapper>
        <SearchWrapper>
          <Search />
        </SearchWrapper>
      </HeaderWrapper>
    );
  }
}
export default Header;
