import React from 'react';
import Category from './Category';

export default class CategoryList extends React.Component {
  render () {
    console.log(this.props.categoryList)
    return (
      <div className='category-list'>
        <div className="wide">
          <div className="row">
            {this.props.categoryList.map(category => <Category category={category} /> )}
          </div>
        </div>
      </div>
    )
  }
}