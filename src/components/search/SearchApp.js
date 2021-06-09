import React, { useState } from 'react';

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
            <input 
            type="text"
            value={ inputValue }
            onChange={handleInputChange}
            />
        </form>
    )
}

export default SearchApp;