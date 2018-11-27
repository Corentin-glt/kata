import React, {Component} from 'react';
import HomeScene from './homeScene';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../../Actions/index';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: false
    };
    this.updateStats = this.updateStats.bind(this);
  }

  componentDidMount() {
    this.props.history.push('/report');
  }

  updateStats() {
    this.setState({stats: !this.state.stats});
  }


  render() {
    return <HomeScene
      stats={this.state.stats}
      updateStats={this.updateStats}
      user={this.props.userReducer.user}
    />
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    userReducer: state.userReducer,
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);