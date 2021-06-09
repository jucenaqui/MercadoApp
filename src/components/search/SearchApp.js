import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";

import './SearchApp.scss';

const SearchApp = ( { history } ) => {

    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( inputValue.trim().length > 2 ) {
            history.push(`/items?search=${inputValue}`);
        }
    }
    return (
        <form onSubmit={ handleSubmit } className="search-form">
        <div className="input-group">
            <input 
            type="text"
            value={ inputValue }
            onChange={handleInputChange}
            />
            <FaSearch />
        </div>
        </form>
    )
}

export default SearchApp;