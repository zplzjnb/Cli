import React, { Component } from "react";
import Logo from '../logo';
import './index.less';


class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props
    }
  }
  render() {
    return (
      <div>
        <Logo />
        <h3>{this.state.title}</h3>
      </div>
    );
  }
}

export default Test;