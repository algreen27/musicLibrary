import React from 'react';
import './MusicList.css';


const MusicList = ({music}) => {
    return (
        <body>
                        <div>
                {music.map((album,index)=>
                <li key={index}>{album.address.suite} : {album.address.city} </li>)}
            </div>

        </body>
    )
}

export default MusicList
