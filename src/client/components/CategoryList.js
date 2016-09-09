import React from 'react';
import Category from './Category';
import EventDetails from './EventDetails';
import { Navigation } from 'react-router';

export default class CategoryList extends React.Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div className='category-list'>
        <div className="wide">
          <div className="row">
            {this.props.categoryList.map(category => <Category key={category.id} category={category} handler={this.props.handler} /> )}
          </div>
        </div>

      </div>
    )
  }
}