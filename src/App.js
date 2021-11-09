import React, { Component } from "react";
import axios from "axios";
import MusicList from "./component/MusicList";
import "./App.css";
// import NavBar from './component/NavBar';
import Search from "./component/Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      music: [],
    };
  }

  async componentDidMount() {
    await axios
      .get(`http://www.devcodecampmusiclibrary.com/api/music`)
      .then((res) => {
        console.log(res.data);
        const music = res.data;
        this.setState({ music });
      });
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      userInput: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.music(this.state);
  };

  componentDidUpdate() {}

  // searchMusic = (newfind) => {
  //   f
  // }

  singleSearch = ()=> {
    
  }
  render() {
    return (
      <body>
        {/* <div><NavBar /></div> */}
        <div>
          <Search handleChange={this.handleChange} userInput={this.state.userInput} />
        </div>

        <div>
          <MusicList music={this.state.music} userInput={this.state.userInput}/>
        </div>
      </body>
    );
  }
}

export default App;
