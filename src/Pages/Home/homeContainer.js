import React, {Component} from 'react';
import HomeScene from './homeScene';



export default class Home extends Component {
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
    />
  }

}