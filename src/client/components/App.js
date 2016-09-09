import React from 'react';
import NavBar from './Navbar';
import Footer from './Footer';
// import RouteHandler from '../routes';

export default class App extends React.Component {
  render () {
    return (
      <div className="app">
        <NavBar />
        {this.props.children}
        <Footer />
       <RouteHandler myprops={this.state.text} />
      </div>
    )
  }
}