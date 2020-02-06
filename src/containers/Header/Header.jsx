import React from 'react';

import HeaderTabs from '../../components/HeaderTabs';

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
      <header>
        <HeaderTabs
          onClickTab={this.handleChange}
          value={value}
        />
      </header>
    );
  }
}
export default Header;
