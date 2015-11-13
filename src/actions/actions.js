import fetch from 'isomorphic-fetch'

export const REQUEST_ATHLETES = 'REQUEST_ATHLETES'
export const RECEIVE_ATHLETES = 'RECEIVE_ATHLETES'

let rp = require('request-promise');

function requestAthletes(){
  return {
    type: REQUEST_ATHLETES
  }
}

function receiveAthletes(json) {
  return {
    type: RECEIVE_ATHLETES,
    athletes: json,
    receivedAt: Date.now()
  }
}

export function fetchAthletes() {
  let reqOptions = {
    url: 'http://localhost:4000/athletes',
    json: true
  };

  return dispatch => {
    dispatch(requestAthletes())
    return fetch(`http://localhost:4000/athletes`)
      .then(req => req.json())
      .then(json => dispatch(receiveAthletes(json)))
  }
}

function shouldFetchAthletes(state) {
  console.log('shouldFetchAthletes called')
  console.trace()

  const athletes = state.athletes.items
  if (!athletes) {
    return true
  } else {
    return false
  }
}

export function fetchAthletesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchAthletes(getState())) {
      return dispatch(fetchAthletes())
    }
  }
}

