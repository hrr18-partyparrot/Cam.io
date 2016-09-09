import React from 'react';
import CategoryList from './CategoryList'
import Logo from './Logo'

export default class App extends React.Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div className="index">
        <Logo />
        <CategoryList categoryList={this.props.categories} handler={this.props.handler} />
      </div>
    )
  }

  componentWillMount() {
    this.props.getEvents();
  }
}