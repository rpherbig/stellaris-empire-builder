import React, { Component } from 'react';
import './NavigationList.css';

class NavigationList extends Component {
  className = (item) => "NavigationButton " + (this.props.active === item ? "Active" : "");

  render() {
    return (
      <div className="NavigationList">
        <li className="NavigationHeader">{this.props.name}</li>
        {this.props.items.map(item =>
          <li key={item}><button className={this.className(item)} onClick={this.props.clickHandler(item)}>{item}</button></li>
        )}
      </div>
    );
  }
}

export default NavigationList;
