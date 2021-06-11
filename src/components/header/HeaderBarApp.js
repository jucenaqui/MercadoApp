import React from 'react';

import SearchApp from '../search/SearchApp';

import './HeaderBarApp.scss';
import logo from '../../assets/logo-header.png';

export const HeaderBarApp = ({history}) => {
    return (
        <div className="header-bar">
            <div className="container-search">
                <img src={ logo } alt="logo" />
                <SearchApp history={ history } />
            </div>
        </div>
    )
}
