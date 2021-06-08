import React, { useState } from 'react';

import { PropTypes } from 'prop-types';

import './SearchApp.scss';

const SearchApp = ( { setProducts, history, location }) => {

    const [ inputValue, setInputValue ] = useState('');
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( inputValue.trim().length > 2 ) {

            history.push(`items?search=${inputValue}`);

            setProducts( prop => {
                return {
                    ...prop,
                    search: inputValue
                }
            })
            setInputValue('');
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

SearchApp.propTypes = {
    setProducts: PropTypes.func.isRequired
}

export default SearchApp;