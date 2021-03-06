import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SidePanel.css';
import NavigationList from './NavigationList';

class SidePanel extends Component {
  render() {
    return (
      <div className="SidePanel">
        <ul className="List">
          {Object.keys(this.props.navigation).map(key =>
            <NavigationList key={key} name={key} items={this.props.navigation[key]} clickHandler={this.props.clickHandler} active={this.props.active} />
          )}
        </ul>
      </div>
    );
  }
}

export default SidePanel;

SidePanel.propTypes = {
  navigation: PropTypes.object.isRequired,
  clickHandler: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired
}
