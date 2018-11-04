import React, { Component } from 'react';
import './SidePanel.css';
import NavigationList from './NavigationList';

class SidePanel extends Component {
  render() {
    return (
      <div className="SidePanel">
        <ul className="List">
          {Object.keys(this.props.navigation).map(key =>
            <NavigationList key={key} name={key} items={this.props.navigation[key]} />
          )}
        </ul>
      </div>
    );
  }
}

export default SidePanel;
