// import './Search.css';

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

    
    render() {
        return (
                <input name="title" onChange={this.props.handleChange} value={this.props.userInput} />
                
        )
    }
}


export default Search

