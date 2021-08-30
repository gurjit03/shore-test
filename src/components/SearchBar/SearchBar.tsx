import React from 'react';
import './SearchBar.scss';

const SearchBar:React.FC = () => {
    return (
        <div className="SearchBar">Search Bar
            <input type='search' />
            <button>Search</button>
        </div>
    )
}   

export default SearchBar;