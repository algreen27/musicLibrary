import React, { Component } from 'react'
import axios from 'axios';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      music:[],
    };
  }

  async componentDidMount(){
    await axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then((found) =>{
    console.log(res.data)
    const music =res.data;
    this.setState({music})
    })
  }

  componentDidUpdate() {}

  render() {
    return (
      <div>
        <MusicList music={this.state.people} />
      </div>
    )
  }
}

export default App

