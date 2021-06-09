import React from 'react';

import logo from '../../images/logo-header.png';
import SearchApp from '../search/SearchApp';

import './HeaderBarApp.scss';

export const HeaderBarApp = ({history}) => {
    return (
        <div className="header-bar">
            <img src={ logo } alt="logo" />
            <SearchApp history={ history } />
        </div>
    )
}
