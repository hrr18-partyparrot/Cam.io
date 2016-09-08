"use strict";

import React from 'react';
import Request from 'superagent';
import _ from 'lodash';

// Component lifecycle docs:
// https://facebook.github.io/react/docs/component-specs.html

class Home extends React.Component {

  constructor(){
    super();
    this.state = {};
  }

  componentWillMount(){
    // Called the first time the component is loaded right before the component is added to the page
    this.search();
  }

  componentDidMount(){
    // Called after the component has been rendered into the page
  }

  componentWillReceiveProps(nextProps){
    // Called when the props provided to the component are changed
  }

  componentWillUpdate(nextProps, nextState){
    // Called when the props and/or state change
  }

  componentWillUnmount(){
    // Called when the component is removed
  }

  updateSearch(){
    this.search(this.refs.query.value);
  }

  render(){
    var events = _.map(this.state.events, (event) => {
      return <li className='list-group-item'>{event.name.text}</li>

    });
    return <div className='container'>
      <ul className='list-group'>{events}</ul>
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          onChange={ (e) => { this.updateSearch(); } }
        />
        </div>
    </div>
  }

  search(query = "music"){
    var url = `https://www.eventbriteapi.com/v3/events/search/?q=${query}&sort_by=best&location.address=San+Francisco&token=YZO3HZ5MJZYKY6QU64H2`;
    Request.get(url).then((response) => {
      this.setState({
        events: response.body.events,
        total: response.body.totalResults
      });
    });
  }

}

export { Home as default };