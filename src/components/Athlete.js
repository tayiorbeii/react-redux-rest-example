import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

export default class Athlete extends Component {
  
  render() {
    const { items } = this.props
    var props = this.props
    console.log('Ath component this.props:' + JSON.stringify(this.props))

    return (
      <div>
        <p>Hi from the AthleteComponent</p>
        <p>
          {JSON.stringify(props)}
        </p>
      </div>
    )
  }
}

Athlete.propTypes = {
  items: PropTypes.object
}
