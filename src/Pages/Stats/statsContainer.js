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
    this.state = {
      myPacks: []
    }
  }

  componentWillMount(){
    let newArrayPacks = [];
    const packsReducer = [...this.props.packReducer.packs.reverse()];
    console.log('\n \nBEFORE ==> ', packsReducer);
    packsReducer.forEach(item => {
      const found = newArrayPacks.some(newItem => newItem.title.toLowerCase() === item.title.toLowerCase());
      if (!found) {
        newArrayPacks.push({title: item.title, price: item.price, numberOfTotal: 1});
      } else {
        newArrayPacks.map(pack=> {
          if (pack.title === item.title) {
            return {
              title: item.title, price: pack.price+=item.price, numberOfTotal: pack.numberOfTotal++
            };
          }
        });
      }
    });
    console.log(newArrayPacks);
    this.setState({myPacks: newArrayPacks});
    console.log('\n \nAFTER ==> ', packsReducer)
  }

  render() {
    return (
      <StatsScene myPacks={this.state.myPacks} />
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