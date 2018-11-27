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
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleLabel = this.handleLabel.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showModal() {
    this.setState({ show: true });
  };

  hideModal() {
    this.setState({ show: false });
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

  render() {
    return (
      <div>
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
        />
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