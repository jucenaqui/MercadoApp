import React from 'react';

import SearchApp from '../search/SearchApp';

import './HeaderBarApp.scss';
// import logo from 'logo-header.png';

export const HeaderBarApp = ({history}) => {
    return (
        <div className="header-bar">
            <div className="container-search">
                <img src={ 'logo-header.png' } alt="logo" />
                <SearchApp history={ history } />
            </div>
        </div>
    )
}
