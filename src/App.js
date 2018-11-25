import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import SidePanel from './SidePanel';
import Content from './Content';
import Footer from './Footer';
import c from './constants';

class App extends Component {
  navigationOrder = [c.APPEARANCE, c.SPECIES_NAME, c.NAME_LISTS, c.TRAITS, c.NAME_AND_CLASS, c.CITY_APPEARANCE, c.GOVERNMENT_AND_ETHICS, c.ADVISOR_VOICE, c.EMPIRE_NAME, c.FLAG, c.SHIP_APPEARANCE, c.RULER]

  state = { activeContent: this.navigationOrder[0], appearance: c.HUMANOID };

  setActiveContent = item => () => this.setState({activeContent: item})

  changeActiveContent = indexChange => () => {
    const currentIndex = this.navigationOrder.findIndex(element => element === this.state.activeContent);
    const newIndex = (currentIndex + indexChange) % this.navigationOrder.length;
    this.setState({activeContent: this.navigationOrder[newIndex]});
  }

  setAppearance = appearance => () => this.setState({appearance})

  render() {
    const navigation = {
      [c.SPECIES]: [c.APPEARANCE, c.SPECIES_NAME, c.NAME_LISTS, c.TRAITS],
      [c.HOMEWORLD]: [c.NAME_AND_CLASS, c.CITY_APPEARANCE],
      [c.EMPIRE]: [c.GOVERNMENT_AND_ETHICS, c.ADVISOR_VOICE, c.EMPIRE_NAME, c.FLAG, c.SHIP_APPEARANCE, c.RULER],
    };

    return (
      <div className="App">
        <Header />
        <SidePanel navigation={navigation} clickHandler={this.setActiveContent} active={this.state.activeContent} />
        <Content active={this.state.activeContent} clickHandler={this.changeActiveContent} appearance={this.state.appearance} setAppearance={this.setAppearance} />
        <Footer />
      </div>
    );
  }
}

export default App;
