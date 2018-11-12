import React, { Component } from 'react';
import './NavigationList.css';

class NavigationList extends Component {
  render() {
    return (
      <div className="NavigationList">
        <li className="NavigationHeader">{this.props.name}</li>
        {this.props.items.map(item =>
          <li key={item}><button className="NavigationButton" onClick={this.props.clickHandler(item)}>{item}</button></li>
        )}
      </div>
    );
  }
}

export default NavigationList;
