import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NavigableContent.css';
import AppearancePanel from './AppearancePanel';
import ContentFooter from './ContentFooter';
import c from './constants';

class NavigableContent extends Component {
  render() {
    return (
      <div className="NavigableContent">
        {this.props.active === c.APPEARANCE && <AppearancePanel appearance={this.props.appearance} setAppearance={this.props.setAppearance} />}
        {this.props.active !== c.APPEARANCE && <p>Content area for {this.props.active}</p>}
        <ContentFooter clickHandler={this.props.clickHandler} />
      </div>
    );
  }
}

export default NavigableContent;

NavigableContent.propTypes = {
  active: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  appearance: PropTypes.string.isRequired,
  setAppearance: PropTypes.func.isRequired
}
