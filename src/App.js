import React, { Component } from 'react'
import axios from 'axios';
import MusicList from './component/MusicList';
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      music:[],
    };
  }

  async componentDidMount(){
    await axios.get(`http://www.devcodecampmusiclibrary.com/api/music`)
    .then((res) =>{
    console.log(res.data)
    const music = res.data;
    this.setState({music})
    })
  }

  componentDidUpdate() {}

  render() {
    return (

      <body>
        <div>
          <MusicList music={this.state.music} />
        </div>
      </body>
    );
  }
}

export default App

