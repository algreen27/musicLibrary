import React from 'react';
import './MusicList.css';


const MusicList = ({music}) => {
    return (
        
        <div class="d-inline-flex p-2 bd-highlight"> 
            <div> {music.map((songs,index)=> 
             <li className="mu-li" key={index}>{songs.title}</li>)} 
            </div>  

        </div> 

    )
}

export default MusicList
