/**
 * Created by corentin on 27/11/2018.
 */
import React, {Component} from 'react';
import ReportScene from "./reportScene";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../../Actions/index';

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ReportScene/>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    packReducer: state.packReducer
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Report);