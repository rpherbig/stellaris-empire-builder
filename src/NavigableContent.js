import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NavigableContent.css';

class NavigableContent extends Component {
  render() {
    return (
      <div className="NavigableContent">
        <p>
          Content area for {this.props.active}
        </p>
      </div>
    );
  }
}

export default NavigableContent;

NavigableContent.propTypes = {
  active: PropTypes.string.isRequired
}
