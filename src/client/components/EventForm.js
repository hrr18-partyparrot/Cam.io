import React from 'react';

class EventForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    var title = React.findDOMNode(this.refs.title).value.trim();
    var description = React.findDOMNode(this.refs.description).value.trim();
    if (!description || !title) {
      return;
    }
    this.props.onEventSubmit({title: title, description: description});
    React.findDOMNode(this.refs.title).value = '';
    React.findDOMNode(this.refs.description).value = '';
    return;
  }

  render() {
    return (
      <form className="eventForm" onSubmit={this.handleSubmit.bind(this)}>
      <input type="text" placeholder="Your Event Title" ref="title" />
      <input type="text" placeholder="Your description" ref="description" />
      <input type="submit" value="Post" />
      </form>
    )
  }
}