import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NavigableContent.css';
import ContentFooter from './ContentFooter';

class NavigableContent extends Component {
  render() {
    return (
      <div className="NavigableContent">
        <p>
          Content area for {this.props.active}
          <ContentFooter clickHandler={this.props.clickHandler} />
        </p>
      </div>
    );
  }
}

export default NavigableContent;

NavigableContent.propTypes = {
  active: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
}
