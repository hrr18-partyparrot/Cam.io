import React from 'react';

export default class EventForm extends React.Component {
  handleSubmit(e) {
    console.log("attempting to submit")
    e.preventDefault();
    var title = this.refs.title.value;
    var description = this.refs.description.value;
    console.log('title: ', title);
    console.log('description: ', description);
    if (!description || !title) {
      return;
    }
    this.props.onEventSubmit({title: title, description: description});
    this.refs.title.value = '';
    this.refs.description.value = '';
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