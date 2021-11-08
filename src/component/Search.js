import React from 'react';
import './Search.css';



const Search = () => {
    return (
        <div>

            <form class="example" action="action_page.php">
            <input type="text" placeholder="Search.." name="search"></input>
            <button type="submit"><i class="fa fa-search"></i></button>
            </form>
        </div>
    )
}

export default Search

