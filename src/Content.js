import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Content.css';
import NavigableContent from './NavigableContent';

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <NavigableContent active={this.props.active}/>
      </div>
    );
  }
}

export default Content;

Content.propTypes = {
  active: PropTypes.string.isRequired
}
