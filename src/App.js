import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import SidePanel from './SidePanel';
import Content from './Content';
import Footer from './Footer';
import c from './constants';

class App extends Component {
  state = { activeContent: c.APPEARANCE };

  clickHandler = item => () => this.setState({activeContent: item})

  render() {
    const navigation = {
      [c.SPECIES]: [c.APPEARANCE, c.SPECIES_NAME, c.NAME_LISTS, c.TRAITS],
      [c.HOMEWORLD]: [c.NAME_AND_CLASS, c.CITY_APPEARANCE],
      [c.EMPIRE]: [c.GOVERNMENT_AND_ETHICS, c.ADVISOR_VOICE, c.EMPIRE_NAME, c.FLAG, c.SHIP_APPEARANCE, c.RULER],
    };

    return (
      <div className="App">
        <Header />
        <SidePanel navigation={navigation} clickHandler={this.clickHandler} active={this.state.activeContent} />
        <Content active={this.state.activeContent} />
        <Footer />
      </div>
    );
  }
}

export default App;
