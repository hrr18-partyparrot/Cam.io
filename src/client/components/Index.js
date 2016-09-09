import React from 'react';
import CategoryList from './CategoryList'
import Logo from './Logo'

export default class App extends React.Component {
  constructor() {
    super();
    //id maps to an id in the db.
    this.categoryList = [
      {
        id: 1,
        title: 'Nightlife',
        imgUrl: './img/causeway-miami-skyline-612x338.jpg'
      },
      {
        id: 2,
        title: 'Outdoors',
        imgUrl: './img/causeway-miami-skyline-612x338.jpg'
      },
      {
        id: 3,
        title: 'Food',
        imgUrl: './img/causeway-miami-skyline-612x338.jpg'
      },
      {
        id: 4,
        title: 'Networking',
        imgUrl: './img/causeway-miami-skyline-612x338.jpg'
      },
      {
        id: 5,
        title: 'Festivals',
        imgUrl: './img/causeway-miami-skyline-612x338.jpg'
      },
      {
        id: 6,
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