import React from 'react';
import './MusicList.css';


const MusicList = ({music}) => {
    return (
            <div>
                {music.map((songs,index)=>
                <li key={index}>{songs.title}</li>)
                }
            </div>   

    )
}

export default MusicList
