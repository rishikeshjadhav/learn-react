import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header'
import Footer from './components/footer/footer';
import MainRouter from './components/main-router/main-router'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainRouter />
        <Footer />
      </div>
    );
  }
}

export default App;
