import React from 'react';
import Event from './userEvent';

export default class EventList extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render(){
    var eventNodes = this.props.events.map((event) => {
      return(<Event event={event} />)
    });
    return (
       <div className="col-md-7">
        <div className="card card-block">
          <h4 className="card-title">Events</h4>
            {eventNodes}
        </div>
       </div>)
  }
}