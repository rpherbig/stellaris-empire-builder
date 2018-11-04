import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import SidePanel from './SidePanel';
import Content from './Content';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SidePanel />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
