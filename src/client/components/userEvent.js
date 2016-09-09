import React from 'react';

export default class Event extends React.Component {
  render(){
    return (
      <div>
        <hr />
          <div className="row">
            <div className="col-md-12">
              <img src={this.props.event.eventbrite.logo ? this.props.event.eventbrite.logo.url : "http://130.211.52.161/tradeo-content/themes/nucleare-pro/images/no-image-box.png"}  alt="" />
            </div>

            <div className="col-md-12" style={{"margin-top":"20px"}}>
              <h2 className="h2-responsive">Test {this.props.event.desc}</h2>
            </div>
          </div>
          <hr />
        </div>)
  }
}
