import fetch from 'isomorphic-fetch'

export const REQUEST_ATHLETES = 'REQUEST_ATHLETES'
export const RECEIVE_ATHLETES = 'RECEIVE_ATHLETES'


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

  return !athletes.length
}

export function fetchAthletesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchAthletes(getState())) {
      return dispatch(fetchAthletes())
    }
  }
}
