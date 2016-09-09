import React from 'react';

export default class Category extends React.Component {
  render () {
    return (
      <div className='category'>
        <div className="col-md-6 col-lg-4">
          <div className="view hm-black-strong" style={{"marginTop":"30px"}} data-toggle="modal" data-target={"#events-" + this.props.category.id}>
            <img src={this.props.category.imgUrl} className="img-fluid" alt="" />
            <div className="mask flex-center waves-effect">
              <h4 className="white-text">{this.props.category.title}</h4>
            </div>
          </div>
        </div>
        <div className="modal fade" id={"events-" + this.props.category.id} tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="modal-title" id="myModalLabel">Events</h4>
              </div>
              <div className="modal-body">
                <ul>
                  <li>BlahBlahBlahBlehBlegh</li>
                  <li>BlahBlahBlahBlehBlegh</li>
                  <li>BlahBlahBlahBlehBlegh</li>
                  <li>BlahBlahBlahBlehBlegh</li>
                  <li>BlahBlahBlahBlehBlegh</li>
                </ul>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}