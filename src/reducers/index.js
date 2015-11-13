import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import { REQUEST_ATHLETES, RECEIVE_ATHLETES } from '../actions/actions'

function athletes(state = {
  isFetching: false,
  items: []
}, action) {
  switch (action.type) {
    case REQUEST_ATHLETES:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_ATHLETES:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.athletes,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}



// export default combineReducers({
//   router: routerStateReducer,
//   athletes: athletes
//
// });

let router = routerStateReducer;
const rootReducer = combineReducers({
  router,
  athletes
})

export default rootReducer
