import React, { Component } from 'react'
import axios from 'axios';
import './component/MusicList'
import MusicList from './component/MusicList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      music:[],
    };
  }

  async componentDidMount(){
    await axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then((res) =>{
    console.log(res.data)
    const music = res.data;
    this.setState({music})
    })
  }

  componentDidUpdate() {}

  render() {
    return (
      <div>
        <MusicList music={this.state.music} />
      </div>
    );
  }
}

export default App

