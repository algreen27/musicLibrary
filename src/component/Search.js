import './Search.css';

import React, { Component } from 'react'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            album: '',
            artist: '',
            genre: '',
            releaseDate: ''

        }
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            title: event.target.value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.searchNewSong(this.state);

        }
    
    render() {
        return (
            <form onSumbit={this.handleSubmit}>
                <label>Search</label>
                <input name="title" onChange={this.handleChange} value={this.state.title} />
                <button type="submit">Search</button>
                
            </form>
        )
    }
}


export default Search

