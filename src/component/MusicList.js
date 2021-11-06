import React from 'react';
import './MusicList.css';


const MusicList = ({music}) => {
    return (
        
        <div className="container-fluid">
            <div className="text-center">
                {music.map((songs,index)=>
                <li key={index}>{songs.title}</li>)
                }
            </div>  
        </div> 

    )
}

export default MusicList
