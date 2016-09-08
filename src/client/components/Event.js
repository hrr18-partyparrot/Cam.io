import React from 'react';
import EventForm from './EventForm';

export default class Event extends React.Component {
  constructor() {
    super();
    this.state = { data: [] }
  }

  handleEventSubmit(event) {
    console.log('inside handleEventSubmit');
    console.log('event: ', event);
    var events = this.state.data;
    var newEvents = events.concat([event]);
    this.setState({data: newEvents});
    $.ajax({
      url: this.props.url,
      contentType: 'application/json',
      type: 'POST',
      data: JSON.stringify(event),
      success: (data) => {
        this.setState({data: data});
        console.log('data from handleEvent: ', data);
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }

  render() {
    return <div className="event">
      <h1>Best Event Ever!!!</h1>
      <EventForm onEventSubmit={this.handleEventSubmit.bind(this)}/>
    </div>
  }
}




//   render() {
//     return (<div className="event">
//     <h1>Event</h1>
//     <EventForm onEventSubmit={this.handleEventSubmit.bind(this)}/>
//     </div>)
//   }
// }
