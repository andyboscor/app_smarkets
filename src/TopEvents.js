import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';
import FaArrowRight from 'react-icons/lib/ti/arrow-right';
import FaRefresh from 'react-icons/lib/fa/refresh';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import getTopEvents from './actions/request';

class TopEvents extends Component {
  constructor(props) {
      super(props);
    }
  render() {
    console.log(this.props.events);
    return (
      <div className="event-list">
        <div className="page-title">
          <p> TOP EVENTS </p>
        </div>
          <div className="refresh"><FaRefresh size={50} onClick={this.props.updateResults}/></div>
        {this.props.events.map(function(item, i){
          return(<div className="event" key={i}>

          <div className="event-container">
            <div className="event-name"> <p>{item.name}</p></div>
            <div className="separator-line"> </div>
            <div className="parent-name"> <p>{item.parent_name}</p></div>
          </div>
          <Link to={"/events/" + item.id} key={item.id} className="arrow-right">
          <div><FaArrowRight size={100}/></div>
            </Link>
        </div>
      )},this)}
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    events: [].concat(state.results)
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    updateResults: () => dispatch(getTopEvents())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopEvents);
