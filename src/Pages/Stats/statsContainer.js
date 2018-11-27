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
    console.log('\n \nBEFORE ==> ', packsReducer)
    packsReducer.forEach((item) => {
      const indexToFind = newArrayPacks.findIndex(elem => {
        return elem.title.toLowerCase() === item.title.toLowerCase()
      });
      if(indexToFind > -1) {
        // console.log('\n \n ---- ITEM ----')
        // console.log('id ==> ', item.id)
        // console.log('name ==> ', item.title)
        // console.log('price  ==> ', item.price)
        // console.log('BEFORE PRICE   ==> ', newArrayPacks[indexToFind].price)
        //newArrayPacks[indexToFind].price += item.price;
        // console.log('AFTER PRICE   ==> ', newArrayPacks[indexToFind].price)
        newArrayPacks[indexToFind].numberOfTotal += 1;
        // console.log('--------------------------')
      } else {
        let newItem = item;
        newItem.numberOfTotal = 1;
        newArrayPacks.push(newItem)
      }
    });
    this.setState({myPacks: newArrayPacks})
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