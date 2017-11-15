import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import reducer from '../reducers/resultsReducer'

export default combineReducers({
  routing: routerReducer,
  results: reducer
})
