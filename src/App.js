import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import SidePanel from './SidePanel';
import Content from './Content';
import Footer from './Footer';

class App extends Component {
  render() {
    const navigation = {
      "Species": ["Appearance", "Species Name", "Name Lists", "Traits"],
      "Homeworld": ["Name & Class", "City Appearance"],
      "Empire": ["Government & Ethics", "Advisor Voice", "Empire Name", "Flag", "Ship Appearance", "Ruler"],
    };

    return (
      <div className="App">
        <Header />
        <SidePanel navigation={navigation} />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
