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
      myPackToUpdate: {},
      isUpdating: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleLabel = this.handleLabel.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clickOnUpdate = this.clickOnUpdate.bind(this);
    this.clickOnDelete = this.clickOnDelete.bind(this);
    this.updatePack = this.updatePack.bind(this);
  }

  showModal() {
    this.setState({show: true});
  };

  hideModal() {
    this.setState({show: false});
  };

  handleLabel(e) {
    this.setState({valueLabel: e.target.value});
  }

  handlePrice(e) {
    this.setState({valuePrice: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  clickOnUpdate(id) {
    let myPackToUpdate = {};
    const findIndex = this.props.packReducer.packs.findIndex(
      item => item.id === id);
    if (findIndex > -1) {
      myPackToUpdate = this.props.packReducer.packs[findIndex];
      this.setState({
        show: true,
        isUpdating: true,
        valueLabel: myPackToUpdate.title,
        valuePrice: myPackToUpdate.price,
        myPackToUpdate: myPackToUpdate
      });
    }
  }

  clickOnDelete(id) {
    let myPackToDelete = {};
    const findIndex = this.props.packReducer.packs.findIndex(
      item => item.id === id);
    if (findIndex > -1) {
      myPackToDelete = this.props.packReducer.packs[findIndex];
      this.props.deletePack(myPackToDelete)
    }
  }

  updatePack(e){
    e.preventDefault();
    this.props.updatePack({
      price: this.state.valuePrice,
      title: this.state.valueLabel,
      id: this.state.myPackToUpdate.id,
      user_id: this.state.myPackToUpdate.user_id,
    })
      .then(() => {
        this.setState({
          myPackToUpdate: {},
          isUpdating: false,
          show: false,
          valueLabel: '',
          valuePrice: 0
        })
      })
      .catch(err => console.log(err))
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
        clickOnUpdate={this.clickOnUpdate}
        clickOnDelete={this.clickOnDelete}
        updatePack={this.updatePack}
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