import React from 'react';
import './MusicList.css';

import React from 'react'

const MusicList = ({music}) => {
    return (
        <div>
            {music.map((album,index)=>
            <li key={index}>{album.address.suite} : {album.address.city} </li>)}
        
        </div>
    )
}

export default MusicList
