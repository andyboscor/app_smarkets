import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './Store';
import getTopEvents from './actions/request';
import EventComponent from './EventComponent';
import TopEvents from './TopEvents';

//Redux Store
const storeInstance = configureStore();

storeInstance.dispatch(getTopEvents());

ReactDOM.render(
  (<Provider store={storeInstance}>
    <Router>
      <Switch>
        <Route exact path="/" component={TopEvents}/>
        <Route path="/events/top" component={TopEvents}/>
        <Route path="/events/:eventID" component={EventComponent}/>
      </Switch>
  </Router>
   </Provider>), document.getElementById('root'));
registerServiceWorker();
