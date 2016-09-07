import React from 'react';
import CategoryList from './CategoryList'
import Logo from './Logo'

export default class App extends React.Component {
  constructor() {
    super();
    this.categoryList = [
      {
        title: 'Nightlife',
        imgUrl: './img/causeway-miami-skyline-612x338.jpg'
      },

      {
        title: 'Outdoors',
        imgUrl: './img/causeway-miami-skyline-612x338.jpg'
      },

      {
        title: 'Food',
        imgUrl: './img/causeway-miami-skyline-612x338.jpg'
      },

      {
        title: 'Networking',
        imgUrl: './img/causeway-miami-skyline-612x338.jpg'
      },

      {
        title: 'Festivals',
        imgUrl: './img/causeway-miami-skyline-612x338.jpg'
      },

      {
        title: 'Music',
        imgUrl: './img/causeway-miami-skyline-612x338.jpg'
      }
    ]
  }

  render () {
    return (
      <div className="index">
        <Logo />
        <CategoryList categoryList={this.categoryList} />
      </div>
    )
  }
}