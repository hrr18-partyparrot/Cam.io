import React from 'react';

export default class Category extends React.Component {
  render () {
    return (
      <div className='category'>
         <div className="col-md-6 col-lg-4">
              <div className="view hm-black-strong" style={{"marginTop":"30px"}}>
                <img src={this.props.category.imgUrl} className="img-fluid" alt="" />
                <div className="mask flex-center">
                  <h4 className="white-text">{this.props.category.title}</h4>
                </div>
              </div>
            </div>
      </div>
    )
  }
}