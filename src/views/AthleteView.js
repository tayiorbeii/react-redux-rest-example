import React, { Component, PropTypes }from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Router, Route, Link } from 'react-router'
import { pushState } from 'redux-router'
import * as athleteActions from '../actions/actions'
import Athlete from '../components/Athlete'

const mapStateToProps = (state) => ({
  athletes : state.athletes.items,
  routerState : state.router
})

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(athleteActions, dispatch)
})

export class AthleteView extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    console.log('Mounted an AthleteView')
    console.log('size of athlete array after component mount:' + this.props.athletes.length)

  }

  // This method doesn't seem to be called ever...
  componentWillReceiveProps(nextProps) {
    console.log('Ath View ComponentWillReceiveProps')
    if (nextProps !== this.props) {
      this.props.actions.fetchAthletesIfNeeded()
    }
  }

  componentWillMount() {
    console.log('Component Will Mount')
    if (this.props.athletes.length === 0) {
      console.log('Atheletes array is empty, we should fetch data')
      this.props.actions.fetchAthletesIfNeeded()
    }
    //console.log('Component will mount props:' + JSON.stringify(this.props, null, 2))
  }


  static propTypes = {
    athlete: React.PropTypes.object
  }

  render () {
    const { id } = this.props.params;
    return (
      <div>
        <h1>Athlete page!</h1>
        <Athlete id={id} profile={this.props.athletes[id]} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AthleteView)
