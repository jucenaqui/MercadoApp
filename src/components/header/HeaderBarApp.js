import React from 'react';

import SearchApp from '../search/SearchApp';

import './HeaderBarApp.scss';

export const HeaderBarApp = ({history}) => {
    return (
        <div className="header-bar">
            <div className="container-search">
                <img src={ process.env.PUBLIC_URL + '/public/logo-header.png' } alt="logo" />
                <SearchApp history={ history } />
            </div>
        </div>
    )
}
