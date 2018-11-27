/**
 * Created by corentin on 27/11/2018.
 */
import React, {Component} from 'react';
import ReportScene from "./reportScene";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../../Actions/index';
import packArray from'../../Asset/packs';

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myPackToUpdate: {}
    };
    this.updateMyPack = this.updateMyPack.bind(this);
    this.deleteMyPack = this.deleteMyPack.bind(this);
  }

  updateMyPack(id) {
    let myPackToUpdate = {};
    const findIndex = this.props.packReducer.packs.findIndex(
      item => item.id === id);
    if (findIndex > -1){
      myPackToUpdate = this.props.packReducer.packs[findIndex];
      this.setState({myPackToUpdate: myPackToUpdate});
    }
  }

  deleteMyPack(id) {
    let myPackToDelete = {};
    const findIndex = this.props.packReducer.packs.findIndex(
      item => item.id === id);
    if (findIndex > -1){
      myPackToDelete = this.props.packReducer.packs[findIndex];
      this.props.deletePack(myPackToDelete)
    }
  }

  render() {
    return (
      <div>
        <ReportScene packArray={packArray}
                     myPacks={this.props.packReducer.packs.reverse()}
                     myPackToUpdate={this.state.myPackToUpdate}
                     updateMyPack={this.updateMyPack}
                     deleteMyPack={this.deleteMyPack}
        />
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