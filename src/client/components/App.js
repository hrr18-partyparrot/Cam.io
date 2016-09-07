import React from 'react';
import NavBar from './Navbar';
import Footer from './Footer';

export default class App extends React.Component {
  render () {
    return (
      <div className="app">
        <NavBar />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}