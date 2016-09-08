import React from 'react';
import CategoryList from './CategoryList'
import Logo from './Logo'

export default class App extends React.Component {
  constructor() {
    super();
    //id maps to an id in the db.
    this.categoryList = [
      {
        id:["103"],
        title: 'Nightlife',
        imgUrl: './img/causeway-miami-skyline-612x338.jpg'
      },

      {
        id:["109", "119"],
        title: 'Outdoors',
        imgUrl: './img/causeway-miami-skyline-612x338.jpg'
      },

      { id: ["110"],
        title: 'Food',
        imgUrl: './img/causeway-miami-skyline-612x338.jpg'
      },

      {
        id: ['101'],
        title: 'Networking',
        imgUrl: './img/causeway-miami-skyline-612x338.jpg'
      },

      {
        id: ["199"],
        title: 'Festivals',
        imgUrl: './img/causeway-miami-skyline-612x338.jpg'
      },

      {
        id: ['111'],
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