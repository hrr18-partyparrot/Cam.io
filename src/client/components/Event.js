import React from 'react';

class Event extends React.Component {
  constructor() {
    this.state = { data: [] }
  }

  handleEventSubmit(event) {newEvents
    var events = this.state.data;
    var newEvents = events.concat([event]);
    this.setState({data: newEvents});
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: event,
      success: (data) => {
        this.setState({data: data});
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }

  render() {
    return <div className="event">
    <h1>Event
    <EventForm onEventSubmit={this.handleEventSubmit.bind(this)}/>
    </div>
  }
}
