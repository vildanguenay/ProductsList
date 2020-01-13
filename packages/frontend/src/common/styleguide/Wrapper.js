import React, { Component } from "react";
import PropTypes from "prop-types";
import { StaticRouter } from "react-router-dom";

import "styleguide/Wrapper.scss";

class Wrapper extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
    const context = {};
    return <StaticRouter context={context}>{this.props.children}</StaticRouter>;
  }
}

export default Wrapper;
