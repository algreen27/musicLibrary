import React from 'react';
import './MusicList.css';


const MusicList = ({music,userInput}) => {
    return (
        
        <div class="d-inline-flex p-2 bd-highlight">
            <ul> {music.map((song,index)=> 
             (userInput === song.artist || userInput === song.title || userInput === song.genre || userInput === song.releaseDate)?<li className="mu-li" key={index}>{song.title}</li>: null
             )} 
            </ul>  

        </div> 

    )
}

export default MusicList
