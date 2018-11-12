import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <p>
          Content area for {this.props.active}
        </p>
      </div>
    );
  }
}

export default Content;
