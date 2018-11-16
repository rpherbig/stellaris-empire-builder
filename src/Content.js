import React, { Component } from 'react';
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
