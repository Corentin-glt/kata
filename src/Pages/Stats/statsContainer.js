/**
 * Created by corentin on 27/11/2018.
 */
import React, {Component} from 'react';
import StatsScene from "./statsScene";

class Stats extends Component {
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
  render(){
    return(
      <StatsScene packArray={this.packArray}/>
    )
  }
}
export default Stats;