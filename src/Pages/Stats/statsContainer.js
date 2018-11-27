/**
 * Created by corentin on 27/11/2018.
 */
import React, {Component} from 'react';
import StatsScene from "./statsScene";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../../Actions/index';

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <StatsScene myPacks={this.props.packReducer.packs} />
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    packReducer: state.packReducer,
    userReducer: state.userReducer,
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Stats);