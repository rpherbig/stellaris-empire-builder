import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ContentFooter.css';

class ContentFooter extends Component {
  render() {
    return (
      <ul className="ContentFooter">
        <li><button onClick={this.props.clickHandler(-1)}>Back</button></li>
        <li><button onClick={this.props.clickHandler(1)}>Next</button></li>
      </ul>
    );
  }
}

export default ContentFooter;

ContentFooter.propTypes = {
  clickHandler: PropTypes.func.isRequired
}
