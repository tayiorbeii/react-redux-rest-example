import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Router, Route, Link } from 'react-router'
import { pushState } from 'redux-router'
import { requestAthletes, receiveAthletes, fetchAthletes, fetchAthletesIfNeeded } from '../actions/actions'

class AthleteApp extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchAthletes())
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      const { dispatch } = nextProps
      dispatch(fetchAthletesIfNeeded())
    }
  }

  renderItems(items) {
    return items.map((item) => {
      return (
        <p key={item.id}><Link to={`/athlete/${item.id}`}>{item.first_name}</Link></p>
      )
    })
  }

  render() {
    const { items, isFetching, lastUpdated } = this.props
    return (
      <div>
        {items.length > 0 &&
          <div>{this.renderItems(items)}</div> 
        }
        <p>
          {lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
            </span>
          }
        </p>
        {!isFetching && items.length === 0 &&
          <h2>No data to display!</h2>
        }
        {isFetching &&
          <div>
            <h2>Fetching Items</h2>
          </div>
        }
      </div>
    )
  }
}

AthleteApp.propTypes = {
  items: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}



function mapStateToProps({router, athletes}) {

  var isFetching = athletes.isFetching
  var items = athletes.items
  var lastUpdated = athletes.lastUpdated

  return {
    isFetching,
    items,
    lastUpdated
  }

}

export default connect(mapStateToProps)(AthleteApp)
