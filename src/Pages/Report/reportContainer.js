/**
 * Created by corentin on 27/11/2018.
 */
import React, {Component} from 'react';
import ReportScene from "./reportScene";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../../Actions/index';
import packArray from '../../assets/packArray';


class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      valueLabel: '',
      valuePrice: 0,
      modalTitle: '',
      myPackToUpdate: {}
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleLabel = this.handleLabel.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateMyPack = this.updateMyPack.bind(this);
    this.deleteMyPack = this.deleteMyPack.bind(this);
  }

  showModal() {
    this.setState({modalTitle: 'Nouvelle Vente', show: true});
  };

  hideModal() {
    this.setState({show: false});
  };

  handleLabel(e) {
    this.setState({valueLabel: e.target.value});
  }

  handlePrice(e) {
    this.setState({valuePrice: parseFloat(e.target.value)});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.hideModal();
    this.props.createPack({
      title: this.state.valueLabel,
      price: this.state.valuePrice,
      user_id: this.props.userReducer.user.id
    })
  }

  updateMyPack(id) {
    let myPackToUpdate = {};
    const findIndex = this.props.packReducer.packs.findIndex(
      item => item.id === id);
    if (findIndex > -1) {
      myPackToUpdate = this.props.packReducer.packs[findIndex];
      this.setState({myPackToUpdate: myPackToUpdate});
    }
  }

  deleteMyPack(id) {
    let myPackToDelete = {};
    const findIndex = this.props.packReducer.packs.findIndex(
      item => item.id === id);
    if (findIndex > -1) {
      myPackToDelete = this.props.packReducer.packs[findIndex];
      this.props.deletePack(myPackToDelete)
    }
  }

  render() {
    return (
      <ReportScene
        packArray={packArray}
        showModal={this.showModal}
        hideModal={this.hideModal}
        show={this.state.show}
        modalTitle={this.state.modalTitle}
        valuePrice={this.state.valuePrice}
        valueLabel={this.state.valueLabel}
        handleLabel={this.handleLabel}
        handlePrice={this.handlePrice}
        handleSubmit={this.handleSubmit}
        myPacks={this.props.packReducer.packs}
        myPackToUpdate={this.state.myPackToUpdate}
        updateMyPack={this.updateMyPack}
        deleteMyPack={this.deleteMyPack}
        user={this.props.userReducer.user}
      />
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