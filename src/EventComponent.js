import React, { Component } from 'react';

import './App.css';
import 'whatwg-fetch';
import {Link} from 'react-router-dom';
import FaArrowLeft from 'react-icons/lib/ti/arrow-left';
class EventComponent extends Component {
  constructor(props) {
      super(props);

      this.state = {
      event_info:{}
      }
    }
//fetch request to get information
async getEventInfo(){
  try{
    let res = await fetch(`https://cors-anywhere.herokuapp.com/https://fe-api.smarkets.com/v0/events/id/${this.props.match.params.eventID}`);

    let json = await res.json();

    console.log(json);
    this.setState({event_info:json.event});
  }
  catch (e) {
    console.log('parsing failed', e);

  }
}
formatTime(date_time){
  console.log(typeof date_time);
  if(date_time != null)
  {
    date_time = date_time.replace('T',' ');
    date_time = date_time.replace('Z',' ');
  }
  return date_time;
}
componentDidMount(){
  this.getEventInfo();
}
  render() {
    return (
      <div className="event-info-container">
          <div className="event-info">
            <div className="event-name">
              <p> {this.state.event_info.name} </p>
            </div>
            <div className="separator-line">
            </div>
            <div className="parent-name">
              <p className="categ-identifier"> League: </p>  <p> {this.state.event_info.parent_name}</p>
            </div>
            <div className="start-time">
              <p className="categ-identifier"> Start Time: </p> <p> {this.formatTime(this.state.event_info.start_datetime)}</p>
            </div>
          </div>

          <Link to="/events/top" className="arrow-left">
            <div><FaArrowLeft size={100}/></div>
          </Link>
      </div>
    );
  }
}

export default EventComponent;
