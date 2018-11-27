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
    this.handleButton = this.handleButton.bind(this);
  }

  componentWillUnmout() {
    clearTimeout(this.timeout);
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

  handleButton(pack) {
    this.props.createPack({
      title: pack.title,
      price: pack.price,
      user_id: this.props.userReducer.user.id
    })
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
        myPackToUpdate: myPackToUpdate,
        modalTitle: 'Modification de vente'
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

  updatePack(e) {
    e.preventDefault();
    this.props.updatePack({
      price: this.state.valuePrice,
      title: this.state.valueLabel,
      id: this.state.myPackToUpdate.id,
      user_id: this.state.myPackToUpdate.user_id,
    });
    this.timeout = setTimeout(() => {
      if (this.props.packReducer.success) {
        this.setState({
          myPackToUpdate: {},
          isUpdating: false,
          show: false,
          valueLabel: '',
          valuePrice: 0,
          modalTitle: ''
        })
      } else {
        console.log('ERROR => ', this.props.packReducer.error)
      }
    }, 500);
  }

  render() {
    return (
      <ReportScene
        packArray={packArray}
        showModal={this.showModal}
        hideModal={this.hideModal}
        show={this.state.show}
        isUpdating={this.state.isUpdating}
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
        user={this.props.userReducer.user}
        handleButton={this.handleButton}
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