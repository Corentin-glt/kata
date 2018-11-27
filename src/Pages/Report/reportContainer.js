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
    this.packArray = [
      {
        name: 'Fleur',
        price: 109
      },
      {
        name: 'Super',
        price: 89
      },
      {
        name: 'Plage',
        price: 209
      },
      {
        name: 'Top',
        price: 59
      },
      {
        name: 'Prems',
        price: 189
      },
      {
        name: 'King',
        price: 309
      }
    ]
  }

  render() {
    return (
      <div>
        <ReportScene packArray={this.packArray}/>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Report);