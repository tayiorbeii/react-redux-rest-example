import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AthleteApp from '../containers/AthleteApp';
import fetchAthletes from '../actions/actions'

const actionCreators = {
  fetchAthletes : () => ({ type : 'REQUEST_ATHLETES' })
};

const mapStateToProps = (state) => ({
  athletes : state.athletes.items,
  routerState : state.router
});
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actionCreators, dispatch)
});

export class HomeView extends React.Component {

  static propTypes = {
    actions : React.PropTypes.object,
    athletes : React.PropTypes.array
  }

  render () {
    return (
      <div>
        <AthleteApp />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);

